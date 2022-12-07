const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("", v1 => {
    rl.question("", v2 => {
        v1 = v1.split(" ")
        v2 = v2.split(" ")
        d = Math.sqrt(((v2[0]-v1[0])**2)+(v2[1]-v1[1])**2)
        console.log(d.toFixed(4))
        rl.close()
    })
})