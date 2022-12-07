const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("", td => {
    a = td.split(" ")
    mAB = ((parseInt(a[0])+parseInt(a[1])+Math.abs(parseInt(a[0])-parseInt(a[1])))/2)
    mTC = ((parseInt(mAB)+parseInt(a[2])+Math.abs(parseInt(mAB)-parseInt(a[2])))/2)
    console.log(mTC)
    rl.close()
})