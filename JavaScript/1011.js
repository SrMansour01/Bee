const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

pi = 3.14159

rl.question("", r => {
    console.log("VOLUME =", ((4/3)*pi*(r**3)).toFixed(3))
    rl.close()
})