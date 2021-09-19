namespace SpriteKind {
    export const boi = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    ParaMatt.x += 5
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    ParaMatt.x += -5
})
let ParaMatt: Sprite = null
info.setLife(3)
ParaMatt = sprites.create(assets.image`Player`, SpriteKind.Player)
let borger = sprites.create(assets.image`smallBurger`, SpriteKind.Food)
let Enemy1 = sprites.create(assets.image`Enemy1`, SpriteKind.boi)
scene.setBackgroundImage(assets.image`Background`)
ParaMatt.setPosition(14, 88)
borger.setPosition(96, 70)
Enemy1.setPosition(111, 70)
forever(function () {
    music.playMelody("G B A G F G D A ", 300)
})
