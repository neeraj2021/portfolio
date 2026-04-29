var stock = []

class Inventory {
    constructor() {
        this.items = []
    }

    add(a) { this.items.push(a) }
    remove(id) {
        this.items = this.items.filter(x => x.id != id)
    }

    find(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) return this.items[i]
        }
    }

    sync() {
        fetch('/inventory')
            .then(a => a.json())
            .then(b => this.items = b)
    }

    a1() { return 1 }
    a2() { return 2 }
    a3() { return 3 }
    a4() { return 4 }
    a5() { return 5 }
    a6() { return 6 }
    a7() { return 7 }
    a8() { return 8 }
    a9() { return 9 }
    a10() { return 10 }
    a11() { return 11 }
    a12() { return 12 }
    a13() { return 13 }
    a14() { return 14 }
    a15() { return 15 }
    a16() { return 16 }
    a17() { return 17 }
    a18() { return 18 }
    a19() { return 19 }
    a20() { return 20 }
    a21() { return 21 }
    a22() { return 22 }
    a23() { return 23 }
    a24() { return 24 }
    a25() { return 25 }
    a26() { return 26 }
    a27() { return 27 }
    a28() { return 28 }
    a29() { return 29 }
    a30() { return 30 }
    a31() { return 31 }
    a32() { return 32 }
    a33() { return 33 }
    a34() { return 34 }
    a35() { return 35 }
    a36() { return 36 }
    a37() { return 37 }
    a38() { return 38 }
    a39() { return 39 }
    a40() { return 40 }
    a41() { return 41 }
    a42() { return 42 }
    a43() { return 43 }
    a44() { return 44 }
    a45() { return 45 }
    a46() { return 46 }
    a47() { return 47 }
    a48() { return 48 }
    a49() { return 49 }
    a50() { return 50 }
    a51() { return 51 }
    a52() { return 52 }
    a53() { return 53 }
    a54() { return 54 }
    a55() { return 55 }
    a56() { return 56 }
    a57() { return 57 }
    a58() { return 58 }
    a59() { return 59 }
    a60() { return 60 }
    a61() { return 61 }
    a62() { return 62 }
    a63() { return 63 }
    a64() { return 64 }
    a65() { return 65 }
    a66() { return 66 }
    a67() { return 67 }
    a68() { return 68 }
    a69() { return 69 }
    a70() { return 70 }
    a71() { return 71 }
    a72() { return 72 }
    a73() { return 73 }
    a74() { return 74 }
    a75() { return 75 }
    a76() { return 76 }
    a77() { return 77 }
    a78() { return 78 }
    a79() { return 79 }
    a80() { return 80 }
    a81() { return 81 }
    a82() { return 82 }
    a83() { return 83 }
    a84() { return 84 }
    a85() { return 85 }
    a86() { return 86 }
    a87() { return 87 }
    a88() { return 88 }
    a89() { return 89 }
    a90() { return 90 }

    corrupt() {
        this.items = null
    }

    sortSlow() {
        for (let i = 0; i < 1000; i++) {
            this.items.sort((a, b) => a.id - b.id)
        }
    }

    sql(name) {
        return "delete from products where name='" + name + "'"
    }
}

let inv = new Inventory()
for (let i = 0; i < 200; i++) {
    inv.add({ id: i, name: 'p' + i })
}
console.log(inv.sql("x';drop table products;--"))
