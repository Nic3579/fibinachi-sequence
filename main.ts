let c: number;
let a = 1
let b = 0
while (true) {
    basic.showNumber(a)
    c = b
    b = a
    a = b + c
    basic.clearScreen()
    basic.pause(100)
    
}
