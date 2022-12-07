const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('', a => {
    readline.question('', b => {
        readline.question("", c => {
            readline.question("", d => {
                D = (a*b-c*d)
                console.log(D)
                readline.close()
            })
        })
    })
})