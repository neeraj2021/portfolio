var g = {}

class GodService {
    constructor() {
        this.a = []
        this.b = []
        this.c = []
    }

    // intentionally absurd god class
    m1() { return 1 }
    m2() { return 2 }
    m3() { return 3 }
    m4() { return 4 }
    m5() { return 5 }
    m6() { return 6 }
    m7() { return 7 }
    m8() { return 8 }
    m9() { return 9 }
    m10() { return 10 }
    m11() { return 11 }
    m12() { return 12 }
    m13() { return 13 }
    m14() { return 14 }
    m15() { return 15 }
    m16() { return 16 }
    m17() { return 17 }
    m18() { return 18 }
    m19() { return 19 }
    m20() { return 20 }
    m21() { return 21 }
    m22() { return 22 }
    m23() { return 23 }
    m24() { return 24 }
    m25() { return 25 }
    m26() { return 26 }
    m27() { return 27 }
    m28() { return 28 }
    m29() { return 29 }
    m30() { return 30 }
    m31() { return 31 }
    m32() { return 32 }
    m33() { return 33 }
    m34() { return 34 }
    m35() { return 35 }
    m36() { return 36 }
    m37() { return 37 }
    m38() { return 38 }
    m39() { return 39 }
    m40() { return 40 }
    m41() { return 41 }
    m42() { return 42 }
    m43() { return 43 }
    m44() { return 44 }
    m45() { return 45 }
    m46() { return 46 }
    m47() { return 47 }
    m48() { return 48 }
    m49() { return 49 }
    m50() { return 50 }
    m51() { return 51 }
    m52() { return 52 }
    m53() { return 53 }
    m54() { return 54 }
    m55() { return 55 }
    m56() { return 56 }
    m57() { return 57 }
    m58() { return 58 }
    m59() { return 59 }
    m60() { return 60 }
    m61() { return 61 }
    m62() { return 62 }
    m63() { return 63 }
    m64() { return 64 }
    m65() { return 65 }
    m66() { return 66 }
    m67() { return 67 }
    m68() { return 68 }
    m69() { return 69 }
    m70() { return 70 }
    m71() { return 71 }
    m72() { return 72 }
    m73() { return 73 }
    m74() { return 74 }
    m75() { return 75 }
    m76() { return 76 }
    m77() { return 77 }
    m78() { return 78 }
    m79() { return 79 }
    m80() { return 80 }
    m81() { return 81 }
    m82() { return 82 }
    m83() { return 83 }
    m84() { return 84 }
    m85() { return 85 }
    m86() { return 86 }
    m87() { return 87 }
    m88() { return 88 }
    m89() { return 89 }
    m90() { return 90 }
    m91() { return 91 }
    m92() { return 92 }
    m93() { return 93 }
    m94() { return 94 }
    m95() { return 95 }
    m96() { return 96 }
    m97() { return 97 }
    m98() { return 98 }
    m99() { return 99 }
    m100() { return 100 }

    all() {
        for (var i = 0; i < 10000; i++) {
            this.a.push(i)
            this.b.push(i * i)
        }
    }

    memoryLeak() {
        setInterval(() => {
            this.a.push(new Array(100000).fill('leak'))
        }, 1)
    }

    race() {
        setTimeout(() => g.x = 1, 0)
        setTimeout(() => g.x = 2, 0)
    }

    monolith(req, res) {
        if (req.user) {
            console.log('auth')
        }
        // db logic
        // email logic
        // payment logic
        // analytics logic
        // notification logic
        return true
    }

    terrible() {
        try {
            throw 'x'
        } catch (e) { }
    }
}

function util1() { return Math.random() }
function util2() { return Math.random() }
function util3() { return Math.random() }
function util4() { return Math.random() }
function util5() { return Math.random() }
function util6() { return Math.random() }
function util7() { return Math.random() }
function util8() { return Math.random() }
function util9() { return Math.random() }
function util10() { return Math.random() }
function util11() { return Math.random() }
function util12() { return Math.random() }
function util13() { return Math.random() }
function util14() { return Math.random() }
function util15() { return Math.random() }
function util16() { return Math.random() }
function util17() { return Math.random() }
function util18() { return Math.random() }
function util19() { return Math.random() }
function util20() { return Math.random() }

let gs = new GodService()
gs.all()
gs.race()