pa = 3.5
pb = 7.5

const readlin = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readlin.question("", a => {
    readlin.question("", b => {
        Mp = ((a*pa)+(b*pb))/(pa+pb)
        console.log("MEDIA =", Mp.toFixed(5))
        readlin.close()
    })
})