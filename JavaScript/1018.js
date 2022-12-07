const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("", rs => {
    if ( 0 < rs <  1000000) {
        console.log(rs),
        a = Math.floor(rs / 100)
        console.log(a, "nota(s) de R$ 100,00")
        b = Math.floor((rs-(a*100))/50)
        console.log(b, "nota(s) de R$ 50,00")
        c = Math.floor((rs-(b*50)-(a*100))/20)
        console.log(c, "nota(s) de R$ 20,00")
        d = Math.floor((rs-(a*100)-(b*50)-(c*20))/10)
        console.log(d, "nota(s) de R$ 10,00")
        e = Math.floor((rs-(a*100)-(b*50)-(c*20)-(d*10))/5)
        console.log(e, "nota(s) de R$ 5,00")
        f = Math.floor((rs-(a*100)-(b*50)-(c*20)-(d*10)-(e*5))/2)
        console.log(f, "nota(s) de R$ 2,00")
        g = Math.floor((rs-(a*100)-(b*50)-(c*20)-(d*10)-(e*5)-(f*2))/1)
        console.log(g, "nota(s) de R$ 1,00")
        rl.close()
    }
})