const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("", prod1 => {
    readline.question("", prod2 => {
        a = prod1.split(" ")
        b = prod2.split(" ")
        console.log("VALOR A PAGAR: R$", ((a[1]*a[2])+(b[1]*b[2])).toFixed(2))
        readline.close()
    })
})