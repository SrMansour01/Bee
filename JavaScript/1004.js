const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("", a => {
    readline.question("", b => {
        PROD = parseInt(a)*parseInt(b)
        console.log("PROD =", PROD)
        readline.close()
    })
})