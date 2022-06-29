input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Left, 45)
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        lista = game.createSprite(1, 2)
        game.setLife(3)
    }
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let lista: game.LedSprite = null
let sprite: game.LedSprite = null
basic.showString("Hola")
basic.pause(100)
basic.showString("Pulse \"A\" girar 45° a la izquierda")
basic.pause(100)
basic.showString("Pulse \"B\" para avanzar")
basic.pause(100)
basic.showString("Pulse \"A\" y \"B\" para iniciar ")
