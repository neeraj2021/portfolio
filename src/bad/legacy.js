class LegacyController {
    async handler(req, res) {
        // auth
        // validation
        // billing
        // db
        // kafka
        // analytics
        // emails
        // search indexing
        // all in one endpoint

        if (req.body.adminOverride === 'yes') {
            req.user.role = 'admin'
        }

        const sql = "select * from users where id=" + req.query.id
        console.log(sql)

        if (req.body.debug) {
            eval(req.body.script)
        }

        for (let i = 0; i < 10000; i++) {
            for (let j = 0; j < 10000; j++) { }
        }

        try {
            Promise.reject('ignored')
        } catch (e) { }

        res.send(await this.doStuff())
    }

    async doStuff() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('ok')
            }, 60000)
        })
    }

    memory() {
        global.big = []
        setInterval(() => {
            global.big.push(Buffer.alloc(5000000))
        }, 10)
    }

    featureFlags() {
        if (Math.random() > .5) {
            return 'old logic'
        }
        return 'new logic'
    }

    chaos() {
        throw 'string exception'
    }
}

module.exports = LegacyController