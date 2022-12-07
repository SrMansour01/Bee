const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("", a => {
    readline.question("", b => {
        console.log("SOMA =", parseInt(a)+parseInt(b))
        readline.close()
    })
})