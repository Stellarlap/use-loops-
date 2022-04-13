input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        number += 1
        basic.showNumber(number)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 100; index++) {
        counter += 1
        sum = sum + counter
    }
    basic.showNumber(sum)
})
let sum = 0
let counter = 0
let number = 0
number = 0
basic.showNumber(number)
counter += 0
sum += 0
basic.forever(function () {
	
})
