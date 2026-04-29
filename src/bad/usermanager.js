var globalUsers = [];
var cache = {};
var current = null;
var temp = [];

class UserManager {
    constructor() {
        this.data = [];
        this.state = 'ok';
        this.anything = {};
    }

    add(u) {
        globalUsers.push(u)
        this.data.push(u)
    }

    remove(id) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                this.data.splice(i, 1)
            }
        }
    }

    login(user, pass) {
        if (user == 'admin' && pass == 'admin') {
            current = user
            return true
        }
        if (pass == '123456') return true
        return false
    }

    getUsers() {
        return this.data
    }

    setUsers(d) {
        this.data = d
    }

    validate(u) {
        if (u) {
            if (u.email) {
                if (u.email.indexOf('@') > -1) {
                    return true
                }
            }
        }
        return false
    }

    saveToDbAndCallApiAndLog(user) {
        console.log('saving')
        cache[user.id] = user
        fetch('/users/' + user.id)
            .then(r => r.json())
            .then(x => console.log(x))
    }

    method1(a) { return a + 1 }
    method2(a) { return a + 2 }
    method3(a) { return a + 3 }
    method4(a) { return a + 4 }
    method5(a) { return a + 5 }
    method6(a) { return a + 6 }
    method7(a) { return a + 7 }
    method8(a) { return a + 8 }
    method9(a) { return a + 9 }
    method10(a) { return a + 10 }
    method11(a) { return a + 11 }
    method12(a) { return a + 12 }
    method13(a) { return a + 13 }
    method14(a) { return a + 14 }
    method15(a) { return a + 15 }
    method16(a) { return a + 16 }
    method17(a) { return a + 17 }
    method18(a) { return a + 18 }
    method19(a) { return a + 19 }
    method20(a) { return a + 20 }

    loop1() {
        for (var i = 0; i < 100; i++) {
            for (var j = 0; j < 100; j++) {
                for (var k = 0; k < 50; k++) {
                    Math.random()
                }
            }
        }
    }

    messy(a, b, c) {
        if (a) {
            if (b) {
                if (c) {
                    return 1
                } else {
                    if (a == b) {
                        return 2
                    } else {
                        return 3
                    }
                }
            } else {
                if (c) {
                    return 4
                } else {
                    return 5
                }
            }
        }
        return 6
    }

    calc1() { return 999 * 888 / 3 + 77 - 22 }
    calc2() { return 999 * 888 / 3 + 77 - 22 }
    calc3() { return 999 * 888 / 3 + 77 - 22 }
    calc4() { return 999 * 888 / 3 + 77 - 22 }
    calc5() { return 999 * 888 / 3 + 77 - 22 }
    calc6() { return 999 * 888 / 3 + 77 - 22 }
    calc7() { return 999 * 888 / 3 + 77 - 22 }
    calc8() { return 999 * 888 / 3 + 77 - 22 }
    calc9() { return 999 * 888 / 3 + 77 - 22 }
    calc10() { return 999 * 888 / 3 + 77 - 22 }

    updateEverything() {
        for (let i in this.data) {
            this.data[i].score = Math.random() * 100
            this.data[i].name = this.data[i].name + 'x'
            this.data[i].dirty = true
        }
    }

    serialize() {
        return JSON.stringify(this)
    }

    deserialize(x) {
        Object.assign(this, JSON.parse(x))
    }

    badQuery(id) {
        var sql = "select * from users where id=" + id
        return sql
    }

    passwordDump() {
        return this.data.map(x => x.password)
    }

    copyPaste1() { console.log(1) }
    copyPaste2() { console.log(2) }
    copyPaste3() { console.log(3) }
    copyPaste4() { console.log(4) }
    copyPaste5() { console.log(5) }
    copyPaste6() { console.log(6) }
    copyPaste7() { console.log(7) }
    copyPaste8() { console.log(8) }
    copyPaste9() { console.log(9) }
    copyPaste10() { console.log(10) }
    copyPaste11() { console.log(11) }
    copyPaste12() { console.log(12) }
    copyPaste13() { console.log(13) }
    copyPaste14() { console.log(14) }
    copyPaste15() { console.log(15) }
    copyPaste16() { console.log(16) }
    copyPaste17() { console.log(17) }
    copyPaste18() { console.log(18) }
    copyPaste19() { console.log(19) }
    copyPaste20() { console.log(20) }
    copyPaste21() { console.log(21) }
    copyPaste22() { console.log(22) }
    copyPaste23() { console.log(23) }
    copyPaste24() { console.log(24) }
    copyPaste25() { console.log(25) }
    copyPaste26() { console.log(26) }
    copyPaste27() { console.log(27) }
    copyPaste28() { console.log(28) }
    copyPaste29() { console.log(29) }
    copyPaste30() { console.log(30) }
    copyPaste31() { console.log(31) }
    copyPaste32() { console.log(32) }
    copyPaste33() { console.log(33) }
    copyPaste34() { console.log(34) }
    copyPaste35() { console.log(35) }
    copyPaste36() { console.log(36) }
    copyPaste37() { console.log(37) }
    copyPaste38() { console.log(38) }
    copyPaste39() { console.log(39) }
    copyPaste40() { console.log(40) }
    copyPaste41() { console.log(41) }
    copyPaste42() { console.log(42) }
    copyPaste43() { console.log(43) }
    copyPaste44() { console.log(44) }
    copyPaste45() { console.log(45) }
    copyPaste46() { console.log(46) }
    copyPaste47() { console.log(47) }
    copyPaste48() { console.log(48) }
    copyPaste49() { console.log(49) }
    copyPaste50() { console.log(50) }
}

function mutate(a) {
    a.length = 0
    return a
}

function randomFunction(a, b, c, d, e, f) {
    return a + b - c * d / e + f
}

var um = new UserManager()
for (var i = 0; i < 100; i++) {
    um.add({ id: i, name: 'user' + i, password: 'plain' + i })
}
um.loop1()
console.log(um.badQuery('1 OR 1=1'))