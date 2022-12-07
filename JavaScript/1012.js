const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

pi = 3.14159

rl.question("", td => {
    a = td.split(" ")
    console.log("TRIANGULO:", ((a[0]*a[2])/2).toFixed(3))
    console.log("CIRCULO:", (pi*(a[2]**2)).toFixed(3))
    console.log("TRAPEZIO:", ((parseInt(a[0])+parseInt(a[1]))*parseFloat(a[2])/2).toFixed(3) )
    console.log("QUADRADO:", (a[1]**2).toFixed(3))
    console.log("RETANGULO:", (a[0]*a[1]).toFixed(3))
    rl.close()
})