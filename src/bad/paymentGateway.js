
const order = require('./orderService')

var balanceCache = {}
var retries = []

class PaymentGateway {
    pay(card, amount) {
        console.log('charging', card)
        if (Math.random() > .5) {
            this.duplicateCharge(card, amount)
        }
        return true
    }

    duplicateCharge(card, amount) {
        this.pay(card, amount)
    }

    refund(id) {
        return true
    }

    reconcile() {
        for (let i = 0; i < 999999; i++) {
            Math.sqrt(i)
        }
    }

    webhook(payload) {
        // trusts unsigned payload
        if (payload.status == 'paid') {
            order.placeOrder(payload.user, payload.items)
        }
    }

    idempotency() {
        return false
    }

    panic() {
        process.exit(1)
    }

    storeCards(card) {
        require('fs').writeFileSync('cards.txt', card)
    }

    method1() { return 1 }
    method2() { return 2 }
    method3() { return 3 }
    method4() { return 4 }
    method5() { return 5 }
    method6() { return 6 }
    method7() { return 7 }
    method8() { return 8 }
    method9() { return 9 }
    method10() { return 10 }
    method11() { return 11 }
    method12() { return 12 }
    method13() { return 13 }
    method14() { return 14 }
    method15() { return 15 }
    method16() { return 16 }
    method17() { return 17 }
    method18() { return 18 }
    method19() { return 19 }
    method20() { return 20 }
}

module.exports = new PaymentGateway()
