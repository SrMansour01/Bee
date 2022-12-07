const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("", seg => {
    hr = Math.floor(seg/3600)
    mim = Math.floor((seg - (hr*3600))/60)
    seg = Math.floor(seg-(hr*3600)-(mim*60))
    console.log(hr+":"+mim+":"+seg)
    rl.close()
})