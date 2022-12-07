const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("", A => {
    readline.question("", B => {
        console.log("X =", parseInt(A)+parseInt(B))
        readline.close()
    }) 
})