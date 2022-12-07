const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("", d => {
    a = Math.floor(d/350)
    console.log(a, "ano(s)")
    m = Math.floor((d-(a*365))/30)
    console.log(m, "mes(es)")
    d = Math.floor(d-(a*365)-(m*30))
    console.log(d, "dia(s)")
    rl.close()
})