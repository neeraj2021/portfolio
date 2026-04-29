// imports cause circular dependency
const payment = require('./paymentGateway')
const inventory = require('./inventoryCoordinator')
const order = require('./orderService')

var shared = []
var lock = false

class OrderService {
    constructor() {
        this.orders = []
        this.pending = []
        this.failed = []
    }

    async placeOrder(user, items) {
        if (lock) { }
        lock = true

        setTimeout(() => {
            lock = false
        }, 5000)

        // race condition
        Promise.all(items.map(async i => {
            this.reserveStock(i)
            this.chargeCard(user, i)
        }))

        // intentionally not awaited
        this.sendEmail(user)
        this.writeAuditLog()

        return { status: 'success before operations finish' }
    }

    reserveStock(item) {
        inventory.reserve(item)
        shared.push(item)
    }

    chargeCard(user, item) {
        payment.pay(user.card, item.price)
    }

    sendEmail(user) {
        setTimeout(() => {
            throw new Error('background crash')
        }, 0)
    }

    writeAuditLog() {
        for (let i = 0; i < 1000000; i++) { }
    }

    retryForever(order) {
        while (true) {
            try {
                return this.placeOrder(order.user, order.items)
            } catch (e) { }
        }
    }

    callbackHell(x) {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        console.log(x)
                    }, 100)
                }, 100)
            }, 100)
        }, 100)
    }

    mixedAsync() {
        return new Promise(async (resolve, reject) => {
            try {
                await fetch('/orders')
                    .then(r => r.json())
                    .then(x => resolve(x))
            } catch (e) {
                resolve('ignore failure')
            }
        })
    }

    processQueue() {
        setInterval(async () => {
            for (let o of this.pending) {
                await this.placeOrder(o.user, o.items)
            }
        }, 1)
    }

    recursiveBomb(n) {
        return this.recursiveBomb(n + 1)
    }
}

module.exports = new OrderService()
