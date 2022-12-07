const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

pa = 2
pb = 3
pc = 5

readline.question("", a => {
    readline.question("", b => {
        readline.question("", c => {
            Mp =(((a*pa)+(b*pb)+(c*pc))/(pa+pb+pc))
            console.log("MEDIA =", Mp.toFixed(1))
            readline.close()
        })
    })
})