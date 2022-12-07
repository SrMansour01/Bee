const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("", name => {
    readline.question("", sf => {
        readline.question("", bonus => {
            console.log("TOTAL =", (parseFloat(sf)+(bonus*(15/100))).toFixed(2))
            readline.close()
        })
    })
})