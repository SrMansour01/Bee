a = 3.14159
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("", r => {
   console.log((a*(r**2)).toFixed(4))
   readline.close()
})