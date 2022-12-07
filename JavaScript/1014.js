const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("", dt => {
    rl.question("", cl => {
        kml = parseInt(dt)/parseFloat(cl)
        console.log(kml.toFixed(3), "km/l")
        rl.close()
    })
})