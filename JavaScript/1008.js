const { read } = require("fs")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("", fun => {
    readline.question("", hr => {
        readline.question("", sala => {
            console.log("NUMBER =", fun)
            console.log("SALARY =", (parseInt(hr)*parseFloat(sala)).toFixed(2))
            readline.close()
        })
    })
})