namespace SpriteKind {
    export const Camera = SpriteKind.create()
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    sprites.setDataBoolean(mySprite, "changed", true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    doAttack(mySprite)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    sprites.setDataBoolean(mySprite, "changed", true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.setDataNumber(mySprite, "facing", 0)
    sprites.setDataBoolean(mySprite, "changed", true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.setDataNumber(mySprite, "facing", 3)
    sprites.setDataBoolean(mySprite, "changed", true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile11`)
    timer.after(2000, function () {
        game.gameOver(true)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorDark4)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.setDataNumber(mySprite, "facing", 2)
    sprites.setDataBoolean(mySprite, "changed", true)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    sprites.setDataBoolean(mySprite, "changed", true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.setDataNumber(mySprite, "facing", 1)
    sprites.setDataBoolean(mySprite, "changed", true)
})
function updateAnimation (sprite: Sprite) {
    if (sprites.readDataBoolean(sprite, "changed")) {
        sprites.setDataBoolean(sprite, "changed", false)
        animation.stopAnimation(animation.AnimationTypes.All, sprite)
        sprite.x += sprites.readDataNumber(sprite, "animDx")
        sprites.setDataNumber(sprite, "animDx", 0)
        sprite.y += sprites.readDataNumber(sprite, "animDy")
        sprites.setDataNumber(sprite, "animDy", 0)
        if (sprites.readDataNumber(sprite, "facing") == 0) {
            if (sprites.readDataBoolean(sprite, "attacking")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . f f f f f 2 2 f f f f f . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f 2 f 2 e f . . 
                    . . f f f 2 2 e e 2 2 f f f . . 
                    . f f e f 2 f e e f 2 f e f f . 
                    . f e e f f e e e e f e e e f . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . . f f f f 2 2 f f f f . . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f f 2 f e f . . 
                    . . f f f 2 f e e 2 2 f f f . . 
                    . . f e 2 f f e e 2 f e e f . . 
                    . f f e f f e e e f e e e f f . 
                    . f f e e e e e e e e e e f f . 
                    . . . f e e e e e e e e f . . . 
                    . . . e f f f f f f f f 4 e . . 
                    . . . 4 f 2 2 2 2 2 e d d 4 . . 
                    . . . e f f f f f f e e 4 . . . 
                    . . . . f f f . . . . . . . . . 
                    `,img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . f f f f f 2 2 f f f f f . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f 2 f 2 e f . . 
                    . . f f f 2 2 e e 2 2 f f f . . 
                    . f f e f 2 f e e f 2 f e f f . 
                    . f e e f f e e e e f e e e f . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . . f f f f 2 2 f f f f . . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e f 2 f f f 2 f 2 e f . . 
                    . . f f f 2 2 e e f 2 f f f . . 
                    . . f e e f 2 e e f f 2 e f . . 
                    . f f e e e f e e e f f e f f . 
                    . f f e e e e e e e e e e f f . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f e . . . 
                    . . 4 d d e 2 2 2 2 2 f 4 . . . 
                    . . . 4 e e f f f f f f e . . . 
                    . . . . . . . . . f f f . . . . 
                    `],
                100,
                false
                )
            } else if (sprites.readDataBoolean(sprite, "blocking") && sprites.readDataBoolean(sprite, "moving")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . f f f f f 2 2 f f f f f . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f 2 f 2 e f . . 
                    . . f f f 2 2 e e 2 2 f f f . . 
                    . f f e f 2 f e e f 2 f e f f . 
                    . f e e f f e e e e f e e e f . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f . . . . . . . 
                    . . . f f e e e e f f . . . . . 
                    . . f e e e f f e e e f . . . . 
                    . . f f f f 2 2 f f f f . . . . 
                    . f f e 2 e 2 2 e 2 e f f . . . 
                    . f e 2 f 2 f f f 2 f e f . . . 
                    . f f f 2 f e e 2 2 f f f . . . 
                    . f e 2 f f e e 2 f e e f . . . 
                    f f e f f e e e f e e e f f . . 
                    f f e e e e e e e e e e f d f . 
                    . . f e e e e e e e e f f b f . 
                    . . e f f f f f f f f 4 f b f . 
                    . . 4 f 2 2 2 2 2 e d d f c f . 
                    . . e f f f f f f e e 4 f f . . 
                    . . . f f f . . . . . . . . . . 
                    `,img`
                    . . . . . f f f f . . . . . . . 
                    . . . f f e e e e f f . . . . . 
                    . . f e e e f f e e e f . . . . 
                    . f f f f f 2 2 f f f f f . . . 
                    . f f e 2 e 2 2 e 2 e f f . . . 
                    . f e 2 f 2 f f 2 f 2 e f . . . 
                    . f f f 2 2 e e 2 2 f f f . . . 
                    f f e f 2 f e e f 2 f e f f . . 
                    f e e f f e e e e f e e e f . . 
                    . f e e e e e e e e e e f . . . 
                    . . f e e e e e e e e f . . . . 
                    . e 4 f f f f f f f f 4 e . . . 
                    . 4 d f 2 2 2 2 2 2 f d 4 . . . 
                    . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . f f . . f f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f . . . . . . . 
                    . . . f f e e e e f f . . . . . 
                    . . f e e e f f e e e f . . . . 
                    . . f f f f 2 2 f f f f . . . . 
                    . f f e 2 e 2 2 e 2 e f f . . . 
                    . f e f 2 f f f 2 f 2 e f . . . 
                    . f f f 2 2 e e f 2 f f f . . . 
                    . f e e f 2 e e f f 2 e f . . . 
                    . f e e e f e e e f f e f f . . 
                    . f e e e e e e e e e e f f . . 
                    . f f e e e e e e e e f . . . . 
                    . f 4 f f f f f f f f e . . . . 
                    . f d d e 2 2 2 2 2 f 4 . . . . 
                    . f 4 e e f f f f f f e . . . . 
                    . . . . . . . . f f f . . . . . 
                    `],
                100,
                true
                )
            } else if (sprites.readDataBoolean(sprite, "moving")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . f f f f f 2 2 f f f f f . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f 2 f 2 e f . . 
                    . . f f f 2 2 e e 2 2 f f f . . 
                    . f f e f 2 f e e f 2 f e f f . 
                    . f e e f f e e e e f e e e f . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . . f f f f 2 2 f f f f . . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f f 2 f e f . . 
                    . . f f f 2 f e e 2 2 f f f . . 
                    . . f e 2 f f e e 2 f e e f . . 
                    . f f e f f e e e f e e e f f . 
                    . f f e e e e e e e e e e f f . 
                    . . . f e e e e e e e e f . . . 
                    . . . e f f f f f f f f 4 e . . 
                    . . . 4 f 2 2 2 2 2 e d d 4 . . 
                    . . . e f f f f f f e e 4 . . . 
                    . . . . f f f . . . . . . . . . 
                    `,img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . f f f f f 2 2 f f f f f . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f 2 f 2 e f . . 
                    . . f f f 2 2 e e 2 2 f f f . . 
                    . f f e f 2 f e e f 2 f e f f . 
                    . f e e f f e e e e f e e e f . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . . f f f f 2 2 f f f f . . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e f 2 f f f 2 f 2 e f . . 
                    . . f f f 2 2 e e f 2 f f f . . 
                    . . f e e f 2 e e f f 2 e f . . 
                    . f f e e e f e e e f f e f f . 
                    . f f e e e e e e e e e e f f . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f e . . . 
                    . . 4 d d e 2 2 2 2 2 f 4 . . . 
                    . . . 4 e e f f f f f f e . . . 
                    . . . . . . . . . f f f . . . . 
                    `],
                100,
                true
                )
            } else if (sprites.readDataBoolean(sprite, "blocking")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f . . . . . . . 
                    . . . f f e e e e f f . . . . . 
                    . . f e e e f f e e e f . . . . 
                    . . f f f f 2 2 f f f f . . . . 
                    . f f e 2 e 2 2 e 2 e f f . . . 
                    . f e 2 f 2 f f f 2 f e f . . . 
                    . f f f 2 f e e 2 2 f f f . . . 
                    . f e 2 f f e e 2 f e e f . . . 
                    f f e f f e e e f e e e f f . . 
                    f f e e e e e e e e e e f d f . 
                    . . f e e e e e e e e f f b f . 
                    . . e f f f f f f f f 4 f b f . 
                    . . 4 f 2 2 2 2 2 e d d f c f . 
                    . . e f f f f f f e e 4 f f . . 
                    . . . f f f . . . . . . . . . . 
                    `],
                100,
                true
                )
            } else {
                sprite.setImage(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . f f f f f 2 2 f f f f f . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f 2 f 2 e f . . 
                    . . f f f 2 2 e e 2 2 f f f . . 
                    . f f e f 2 f e e f 2 f e f f . 
                    . f e e f f e e e e f e e e f . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `)
            }
        } else if (sprites.readDataNumber(sprite, "facing") == 1) {
            if (sprites.readDataBoolean(sprite, "attacking")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    ........................
                    ....ffffff..............
                    ..ffeeeef2f.............
                    .ffeeeef222f............
                    .feeeffeeeef...cc.......
                    .ffffee2222ef.cdc.......
                    .fe222ffffe2fcddc.......
                    fffffffeeeffcddc........
                    ffe44ebf44ecddc.........
                    fee4d41fddecdc..........
                    .feee4dddedccc..........
                    ..ffee44e4dde...........
                    ...f222244ee............
                    ...f2222e2f.............
                    ...f444455f.............
                    ....ffffff..............
                    .....fff................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    .......fff..............
                    ....fffff2f.............
                    ..ffeeeee22ff...........
                    .ffeeeeee222ff..........
                    .feeeefffeeeef..........
                    .fffffeee2222ef.........
                    fffe222fffffe2f.........
                    fffffffffeeefff.....cc..
                    fefe44ebbf44eef...ccdc..
                    .fee4d4bbfddef..ccddcc..
                    ..feee4dddddfeecdddc....
                    ...f2222222eeddcdcc.....
                    ...f444445e44ddccc......
                    ...ffffffffeeee.........
                    ...fff...ff.............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    .......ff...............
                    ....ffff2ff.............
                    ..ffeeeef2ff............
                    .ffeeeeef22ff...........
                    .feeeeffeeeef...........
                    .fffffee2222ef..........
                    fffe222ffffe2f..........
                    ffffffffeeefff..........
                    fefe44ebf44eef..........
                    .fee4d4bfddef...........
                    ..feee4dddee.c..........
                    ...f2222eeddeccccccc....
                    ...f444e44ddecddddd.....
                    ...fffffeeee.ccccc......
                    ..ffffffff...c..........
                    ..fff..ff...............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ....ffffff..............
                    ..ffeeeef2f.............
                    .ffeeeef222f............
                    .feeeffeeeef............
                    .ffffee2222ef...........
                    .fe222ffffe2f...........
                    fffffffeeefff...........
                    ffe44ebf44eef...........
                    fee4d41fddef............
                    .feee4ddddf.............
                    ..fdde444ef.............
                    ..fdde22ccc.............
                    ...eef22cdc.............
                    ...f4444cddc............
                    ....fffffcddc...........
                    .....fff..cddc..........
                    ...........cdc..........
                    ............cc..........
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `],
                100,
                false
                )
            } else if (sprites.readDataBoolean(sprite, "blocking") && sprites.readDataBoolean(sprite, "moving")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f . . . 
                    . . f e e e e e d d d f . . . . 
                    . . . . f 4 d d e 4 e f . . . . 
                    . . . . f e d d e 2 2 f . . . . 
                    . . . f f f e e f 5 5 f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f f . . 
                    . . f e e e 4 d d d d f d d f . 
                    . . . f f e e 4 e e e f b b f . 
                    . . . . f 2 2 2 4 d d e b b f . 
                    . . . . e 2 2 2 e d d e b f . . 
                    . . . . f 4 4 4 f e e f f . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f . . . 
                    . . f e e e e e d d d f . . . . 
                    . . . . f 4 d d e 4 e f . . . . 
                    . . . . f e d d e 2 2 f . . . . 
                    . . . f f f e e f 5 5 f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f f . . 
                    . . f e e e 4 d d d d f d d f . 
                    . . . . f e e 4 e e e f b b f . 
                    . . . . f 2 2 2 4 d d e b b f . 
                    . . . f f 4 4 4 e d d e b f . . 
                    . . . f f f f f f e e f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `],
                100,
                true
                )
            } else if (sprites.readDataBoolean(sprite, "moving")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . f f f f f f . . . . 
                    . . . . f f e e e e f 2 f . . . 
                    . . . f f e e e e f 2 2 2 f . . 
                    . . . f e e e f f e e e e f . . 
                    . . . f f f f e e 2 2 2 2 e f . 
                    . . . f e 2 2 2 f f f f e 2 f . 
                    . . f f f f f f f e e e f f f . 
                    . . f f e 4 4 e b f 4 4 e e f . 
                    . . f e e 4 d 4 1 f d d e f . . 
                    . . . f e e e 4 d d d d f . . . 
                    . . . . f f e e 4 4 4 e f . . . 
                    . . . . . 4 d d e 2 2 2 f . . . 
                    . . . . . e d d e 2 2 2 f . . . 
                    . . . . . f e e f 4 5 5 f . . . 
                    . . . . . . f f f f f f . . . . 
                    . . . . . . . f f f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f . . . . 
                    . . . . f f e e e e f 2 f . . . 
                    . . . f f e e e e f 2 2 2 f . . 
                    . . . f e e e f f e e e e f . . 
                    . . . f f f f e e 2 2 2 2 e f . 
                    . . . f e 2 2 2 f f f f e 2 f . 
                    . . f f f f f f f e e e f f f . 
                    . . f f e 4 4 e b f 4 4 e e f . 
                    . . f e e 4 d 4 1 f d d e f . . 
                    . . . f e e e e e d d d f . . . 
                    . . . . . f 4 d d e 4 e f . . . 
                    . . . . . f e d d e 2 2 f . . . 
                    . . . . f f f e e f 5 5 f f . . 
                    . . . . f f f f f f f f f f . . 
                    . . . . . f f . . . f f f . . . 
                    `,img`
                    . . . . . . f f f f f f . . . . 
                    . . . . f f e e e e f 2 f . . . 
                    . . . f f e e e e f 2 2 2 f . . 
                    . . . f e e e f f e e e e f . . 
                    . . . f f f f e e 2 2 2 2 e f . 
                    . . . f e 2 2 2 f f f f e 2 f . 
                    . . f f f f f f f e e e f f f . 
                    . . f f e 4 4 e b f 4 4 e e f . 
                    . . f e e 4 d 4 1 f d d e f . . 
                    . . . f e e e 4 d d d d f . . . 
                    . . . . f f e e 4 4 4 e f . . . 
                    . . . . . 4 d d e 2 2 2 f . . . 
                    . . . . . e d d e 2 2 2 f . . . 
                    . . . . . f e e f 4 5 5 f . . . 
                    . . . . . . f f f f f f . . . . 
                    . . . . . . . f f f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f . . . . 
                    . . . . f f e e e e f 2 f . . . 
                    . . . f f e e e e f 2 2 2 f . . 
                    . . . f e e e f f e e e e f . . 
                    . . . f f f f e e 2 2 2 2 e f . 
                    . . . f e 2 2 2 f f f f e 2 f . 
                    . . f f f f f f f e e e f f f . 
                    . . f f e 4 4 e b f 4 4 e e f . 
                    . . f e e 4 d 4 1 f d d e f . . 
                    . . . f e e e 4 d d d d f . . . 
                    . . . . 4 d d e 4 4 4 e f . . . 
                    . . . . e d d e 2 2 2 2 f . . . 
                    . . . . f e e f 4 4 5 5 f f . . 
                    . . . . f f f f f f f f f f . . 
                    . . . . . f f . . . f f f . . . 
                    `],
                100,
                true
                )
            } else if (sprites.readDataBoolean(sprite, "blocking")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f f . . 
                    . . f e e e 4 d d d d f d d f . 
                    . . . . f e e 4 e e e f b b f . 
                    . . . . f 2 2 2 4 d d e b b f . 
                    . . . f f 4 4 4 e d d e b f . . 
                    . . . f f f f f f e e f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `],
                100,
                false
                )
            } else {
                sprite.setImage(img`
                    . . . . . . f f f f f f . . . . 
                    . . . . f f e e e e f 2 f . . . 
                    . . . f f e e e e f 2 2 2 f . . 
                    . . . f e e e f f e e e e f . . 
                    . . . f f f f e e 2 2 2 2 e f . 
                    . . . f e 2 2 2 f f f f e 2 f . 
                    . . f f f f f f f e e e f f f . 
                    . . f f e 4 4 e b f 4 4 e e f . 
                    . . f e e 4 d 4 1 f d d e f . . 
                    . . . f e e e 4 d d d d f . . . 
                    . . . . f f e e 4 4 4 e f . . . 
                    . . . . . 4 d d e 2 2 2 f . . . 
                    . . . . . e d d e 2 2 2 f . . . 
                    . . . . . f e e f 4 5 5 f . . . 
                    . . . . . . f f f f f f . . . . 
                    . . . . . . . f f f . . . . . . 
                    `)
            }
        } else if (sprites.readDataNumber(sprite, "facing") == 2) {
            if (sprites.readDataBoolean(sprite, "attacking")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    ........................
                    .....ffff...............
                    ...fff22fff.............
                    ..fff2222fff............
                    .fffeeeeeefff...........
                    .ffe222222eef...........
                    .fe2ffffff2ef...........
                    .ffffeeeeffff...........
                    ffefbf44fbfeff..........
                    fee41fddf14eef..........
                    .ffffdddddeef...........
                    fddddf444eef............
                    fbbbbf2222f4e...........
                    fbbbbf2222fd4...........
                    .fccf45544f44...........
                    ..ffffffff..............
                    ....ff..ff..............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    ......ffff..............
                    ....fff22fff............
                    ...fff2222fff...........
                    ..fffeeeeeefff..........
                    ..ffe222222eef..........
                    ..fe2ffffff2ef..........
                    ..ffffeeeeffff..........
                    .ffefbf44fbfeff.........
                    .fee41fddf14eef.........
                    fdfeeddddd4eff..........
                    fbffee444edd4e..........
                    fbf4f2222edde...........
                    fcf.f22cccee............
                    .ff.f44cdc4f............
                    ....fffddcff............
                    .....fddcff.............
                    ....cddc................
                    ....cdc.................
                    ....cc..................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    ........................
                    .......ff...............
                    .....ff22ff.............
                    ...fff2222fff...........
                    ..fff222222fff..........
                    ..fff222222fff..........
                    ..feeeeeeeeeeff.........
                    .ffe22222222eff.........
                    .fffffeeeefffff.........
                    fdfefbf44fbfeff.........
                    fbfe41fddf14ef..........
                    fbffe4dddd4efe..........
                    fcfef22222f4e...........
                    .ff4f44554f4e...........
                    ....ffffffdde...........
                    .....ffffedde...........
                    ..........ee............
                    .........ccc............
                    ........cc1cc...........
                    .........c1c............
                    .........c1c............
                    .........c1c............
                    .........c1c............
                    `,img`
                    ......ffff..............
                    ....fff22fff............
                    ...fff2222fff...........
                    ..fffeeeeeefff..........
                    ..ffe222222eef..........
                    ..fe2ffffff2ef..........
                    ..ffffeeeeffff......ccc.
                    .ffefbf44fbfeff....cddc.
                    .ffefbf44fbfeff...cddc..
                    .fee4dddddd4eef.ccddc...
                    fdfeeddddd4eeffecddc....
                    fbffee4444ee4fddccc.....
                    fbf4f222222f1edde.......
                    fcf.f222222f44ee........
                    .ff.f445544f............
                    ....ffffffff............
                    .....ff..ff.............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `],
                100,
                false
                )
            } else if (sprites.readDataBoolean(sprite, "blocking") && sprites.readDataBoolean(sprite, "moving")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . . f e 2 f f f f f f 2 e f . . 
                    . . f f f f e e e e f f f f . . 
                    . f f e f b f 4 4 f b f e f f . 
                    . f e e 4 1 f d d f 1 4 e e f . 
                    . . f f f f d d d d d e e f . . 
                    . f d d d d f 4 4 4 e e f . . . 
                    . f b b b b f 2 2 2 2 f 4 e . . 
                    . f b b b b f 2 2 2 2 f d 4 . . 
                    . . f c c f 4 5 5 4 4 f 4 4 . . 
                    . . . f f f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . f f e 2 f f f f f f 2 e f f . 
                    . f f f f f e e e e f f f f f . 
                    . . f e f b f 4 4 f b f e f . . 
                    . f f e 4 1 f d d f 1 4 e f . . 
                    f d f f e 4 d d d d 4 e f e . . 
                    f b f e f 2 2 2 2 e d d 4 e . . 
                    f b f 4 f 2 2 2 2 e d d e . . . 
                    f c f . f 4 4 5 5 f e e . . . . 
                    . f f . f f f f f f f . . . . . 
                    . . . . f f f . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f e e 2 2 2 2 2 2 e f f . . 
                    . f f e 2 f f f f f f 2 e f f . 
                    . f f f f f e e e e f f f f f . 
                    . . f e f b f 4 4 f b f e f . . 
                    . . f e 4 1 f d d f 1 4 e f . . 
                    . . e f f f f d d d 4 e f . . . 
                    . . f d d d d f 2 2 2 f e f . . 
                    . . f b b b b f 2 2 2 f 4 e . . 
                    . . f b b b b f 5 4 4 f . . . . 
                    . . . f c c f f f f f f . . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f e e 2 2 2 2 2 2 e f f . . 
                    . f f e 2 f f f f f f 2 e f f . 
                    . f f f f f e e e e f f f f f . 
                    . . f e f b f 4 4 f b f e f . . 
                    . . f e 4 1 f d d f 1 4 e f f . 
                    . . e f e 4 d d d d 4 e f f d f 
                    . . e 4 d d e 2 2 2 2 f e f b f 
                    . . . e d d e 2 2 2 2 f 4 f b f 
                    . . . . e e f 5 5 4 4 f . f c f 
                    . . . . . f f f f f f f . f f . 
                    . . . . . . . . . f f f . . . . 
                    `],
                100,
                true
                )
            } else if (sprites.readDataBoolean(sprite, "moving")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . . f e 2 f f f f f f 2 e f . . 
                    . . f f f f e e e e f f f f . . 
                    . f f e f b f 4 4 f b f e f f . 
                    . f e e 4 1 f d d f 1 4 e e f . 
                    . . f e e d d d d d d e e f . . 
                    . . . f e e 4 4 4 4 e e f . . . 
                    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . f f e 2 f f f f f f 2 e f f . 
                    . f f f f f e e e e f f f f f . 
                    . . f e f b f 4 4 f b f e f . . 
                    . . f e 4 1 f d d f 1 4 e f . . 
                    . . . f e 4 d d d d 4 e f e . . 
                    . . f e f 2 2 2 2 e d d 4 e . . 
                    . . e 4 f 2 2 2 2 e d d e . . . 
                    . . . . f 4 4 5 5 f e e . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f f . . . . . . . . . 
                    `,img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . . f e 2 f f f f f f 2 e f . . 
                    . . f f f f e e e e f f f f . . 
                    . f f e f b f 4 4 f b f e f f . 
                    . f e e 4 1 f d d f 1 4 e e f . 
                    . . f e e d d d d d d e e f . . 
                    . . . f e e 4 4 4 4 e e f . . . 
                    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f e e 2 2 2 2 2 2 e f f . . 
                    . f f e 2 f f f f f f 2 e f f . 
                    . f f f f f e e e e f f f f f . 
                    . . f e f b f 4 4 f b f e f . . 
                    . . f e 4 1 f d d f 1 4 e f . . 
                    . . e f e 4 d d d d 4 e f . . . 
                    . . e 4 d d e 2 2 2 2 f e f . . 
                    . . . e d d e 2 2 2 2 f 4 e . . 
                    . . . . e e f 5 5 4 4 f . . . . 
                    . . . . . f f f f f f f . . . . 
                    . . . . . . . . . f f f . . . . 
                    `],
                100,
                true
                )
            } else if (sprites.readDataBoolean(sprite, "blocking")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f e e 2 2 2 2 2 2 e f f . . 
                    . f f e 2 f f f f f f 2 e f f . 
                    . f f f f f e e e e f f f f f . 
                    . . f e f b f 4 4 f b f e f . . 
                    . . f e 4 1 f d d f 1 4 e f . . 
                    . . e f f f f d d d 4 e f . . . 
                    . . f d d d d f 2 2 2 f e f . . 
                    . . f b b b b f 2 2 2 f 4 e . . 
                    . . f b b b b f 5 4 4 f . . . . 
                    . . . f c c f f f f f f . . . . 
                    . . . . f f . . . f f f . . . . 
                    `],
                100,
                false
                )
            } else {
                sprite.setImage(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . . f e 2 f f f f f f 2 e f . . 
                    . . f f f f e e e e f f f f . . 
                    . f f e f b f 4 4 f b f e f f . 
                    . f e e 4 1 f d d f 1 4 e e f . 
                    . . f e e d d d d d d e e f . . 
                    . . . f e e 4 4 4 4 e e f . . . 
                    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `)
            }
        } else if (sprites.readDataNumber(sprite, "facing") == 3) {
            if (sprites.readDataBoolean(sprite, "attacking")) {
                sprites.setDataNumber(sprite, "animDx", 8)
                mySprite.x += -8
                animation.runImageAnimation(
                sprite,
                [img`
                    ..............ffffff....
                    .............f2feeeeff..
                    ............f222feeeeff.
                    .......cc...feeeeffeeef.
                    .......cdc.fe2222eeffff.
                    .......cddcf2effff222ef.
                    ........cddcffeeefffffff
                    .........cddce44fbe44eff
                    ..........cdceddf14d4eef
                    ..........cccdeddd4eeef.
                    ...........edd4e44eeff..
                    ............ee442222f...
                    .............f2e2222f...
                    .............f554444f...
                    ..............ffffff....
                    ................fff.....
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    ..............fff.......
                    .............f2fffff....
                    ...........ff22eeeeeff..
                    ..........ff222eeeeeeff.
                    ..........feeeefffeeeef.
                    .........fe2222eeefffff.
                    .........f2efffff222efff
                    ..cc.....fffeeefffffffff
                    ..cdcc...fee44fbbe44efef
                    ..ccddcc..feddfbb4d4eef.
                    ....cdddceefddddd4eeef..
                    .....ccdcddee2222222f...
                    ......cccdd44e544444f...
                    .........eeeeffffffff...
                    .............ff...fff...
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ...............ff.......
                    .............ff2ffff....
                    ............ff2feeeeff..
                    ...........ff22feeeeeff.
                    ...........feeeeffeeeef.
                    ..........fe2222eefffff.
                    ..........f2effff222efff
                    ..........fffeeeffffffff
                    ..........fee44fbe44efef
                    ...........feddfb4d4eef.
                    ..........c.eeddd4eeef..
                    ....ccccccceddee2222f...
                    .....dddddcedd44e444f...
                    ......ccccc.eeeefffff...
                    ..........c...ffffffff..
                    ...............ff..fff..
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ..............ffffff....
                    .............f2feeeeff..
                    ............f222feeeeff.
                    ............feeeeffeeef.
                    ...........fe2222eeffff.
                    ...........f2effff222ef.
                    ...........fffeeefffffff
                    ...........fee44fbe44eff
                    ............feddf14d4eef
                    .............fdddd4eeef.
                    .............fe444eddf..
                    .............ccc22eddf..
                    .............cdc22fee...
                    ............cddc4444f...
                    ...........cddcfffff....
                    ..........cddc..fff.....
                    ..........cdc...........
                    ..........cc............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `],
                100,
                false
                )
            } else if (sprites.readDataBoolean(sprite, "blocking") && sprites.readDataBoolean(sprite, "moving")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . f f e d d f 1 4 d 4 e e f . 
                    . f d d f d d d d 4 e e e f . . 
                    . f b b f e e e 4 e e f . . . . 
                    . f b b e d d 4 2 2 2 f . . . . 
                    . . f b e d d e 4 4 4 f f . . . 
                    . . . f f e e f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . . f e d d f 1 4 d 4 e e f . 
                    . . . . f d d d e e e e e f . . 
                    . . . . f e 4 e d d 4 f . . . . 
                    . . . . f 2 2 e d d e f . . . . 
                    . . . f f 5 5 f e e f f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . f f e d d f 1 4 d 4 e e f . 
                    . f d d f d d d d 4 e e e f . . 
                    . f b b f e e e 4 e e f f . . . 
                    . f b b e d d 4 2 2 2 f . . . . 
                    . . f b e d d e 2 2 2 e . . . . 
                    . . . f f e e f 4 4 4 f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . f 2 f e e e e f f . . . . 
                    . . f 2 2 2 f e e e e f f . . . 
                    . . f e e e e f f e e e f . . . 
                    . f e 2 2 2 2 e e f f f f . . . 
                    . f 2 e f f f f 2 2 2 e f . . . 
                    . f f f e e e f f f f f f f . . 
                    . f e e 4 4 f b e 4 4 e f f . . 
                    . . f e d d f 1 4 d 4 e e f . . 
                    . . . f d d d e e e e e f . . . 
                    . . . f e 4 e d d 4 f . . . . . 
                    . . . f 2 2 e d d e f . . . . . 
                    . . f f 5 5 f e e f f f . . . . 
                    . . f f f f f f f f f f . . . . 
                    . . . f f f . . . f f . . . . . 
                    `],
                100,
                true
                )
            } else if (sprites.readDataBoolean(sprite, "moving")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . f f f f f f . . . . . . 
                    . . . f 2 f e e e e f f . . . . 
                    . . f 2 2 2 f e e e e f f . . . 
                    . . f e e e e f f e e e f . . . 
                    . f e 2 2 2 2 e e f f f f . . . 
                    . f 2 e f f f f 2 2 2 e f . . . 
                    . f f f e e e f f f f f f f . . 
                    . f e e 4 4 f b e 4 4 e f f . . 
                    . . f e d d f 1 4 d 4 e e f . . 
                    . . . f d d d d 4 e e e f . . . 
                    . . . f e 4 4 4 e e f f . . . . 
                    . . . f 2 2 2 e d d 4 . . . . . 
                    . . . f 2 2 2 e d d e . . . . . 
                    . . . f 5 5 4 f e e f . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . . . f f f . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . f 2 f e e e e f f . . . . 
                    . . f 2 2 2 f e e e e f f . . . 
                    . . f e e e e f f e e e f . . . 
                    . f e 2 2 2 2 e e f f f f . . . 
                    . f 2 e f f f f 2 2 2 e f . . . 
                    . f f f e e e f f f f f f f . . 
                    . f e e 4 4 f b e 4 4 e f f . . 
                    . . f e d d f 1 4 d 4 e e f . . 
                    . . . f d d d e e e e e f . . . 
                    . . . f e 4 e d d 4 f . . . . . 
                    . . . f 2 2 e d d e f . . . . . 
                    . . f f 5 5 f e e f f f . . . . 
                    . . f f f f f f f f f f . . . . 
                    . . . f f f . . . f f . . . . . 
                    `,img`
                    . . . . f f f f f f . . . . . . 
                    . . . f 2 f e e e e f f . . . . 
                    . . f 2 2 2 f e e e e f f . . . 
                    . . f e e e e f f e e e f . . . 
                    . f e 2 2 2 2 e e f f f f . . . 
                    . f 2 e f f f f 2 2 2 e f . . . 
                    . f f f e e e f f f f f f f . . 
                    . f e e 4 4 f b e 4 4 e f f . . 
                    . . f e d d f 1 4 d 4 e e f . . 
                    . . . f d d d d 4 e e e f . . . 
                    . . . f e 4 4 4 e e f f . . . . 
                    . . . f 2 2 2 e d d 4 . . . . . 
                    . . . f 2 2 2 e d d e . . . . . 
                    . . . f 5 5 4 f e e f . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . . . f f f . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . f 2 f e e e e f f . . . . 
                    . . f 2 2 2 f e e e e f f . . . 
                    . . f e e e e f f e e e f . . . 
                    . f e 2 2 2 2 e e f f f f . . . 
                    . f 2 e f f f f 2 2 2 e f . . . 
                    . f f f e e e f f f f f f f . . 
                    . f e e 4 4 f b e 4 4 e f f . . 
                    . . f e d d f 1 4 d 4 e e f . . 
                    . . . f d d d d 4 e e e f . . . 
                    . . . f e 4 4 4 e d d 4 . . . . 
                    . . . f 2 2 2 2 e d d e . . . . 
                    . . f f 5 5 4 4 f e e f . . . . 
                    . . f f f f f f f f f f . . . . 
                    . . . f f f . . . f f . . . . . 
                    `],
                100,
                true
                )
            } else if (sprites.readDataBoolean(sprite, "blocking")) {
                animation.runImageAnimation(
                sprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . f f e d d f 1 4 d 4 e e f . 
                    . f d d f d d d d 4 e e e f . . 
                    . f b b f e e e 4 e e f . . . . 
                    . f b b e d d 4 2 2 2 f . . . . 
                    . . f b e d d e 4 4 4 f f . . . 
                    . . . f f e e f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `],
                100,
                false
                )
            } else {
                sprite.setImage(img`
                    . . . . f f f f f f . . . . . . 
                    . . . f 2 f e e e e f f . . . . 
                    . . f 2 2 2 f e e e e f f . . . 
                    . . f e e e e f f e e e f . . . 
                    . f e 2 2 2 2 e e f f f f . . . 
                    . f 2 e f f f f 2 2 2 e f . . . 
                    . f f f e e e f f f f f f f . . 
                    . f e e 4 4 f b e 4 4 e f f . . 
                    . . f e d d f 1 4 d 4 e e f . . 
                    . . . f d d d d 4 e e e f . . . 
                    . . . f e 4 4 4 e e f f . . . . 
                    . . . f 2 2 2 e d d 4 . . . . . 
                    . . . f 2 2 2 e d d e . . . . . 
                    . . . f 5 5 4 f e e f . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . . . f f f . . . . . . . 
                    `)
            }
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    sprites.setDataBoolean(mySprite, "blocking", false)
    sprites.setDataBoolean(mySprite, "changed", true)
    playerMoveSpeed = playerMoveSpeedIdle
    controller.moveSprite(mySprite, playerMoveSpeed, playerMoveSpeed)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    sprites.setDataBoolean(mySprite, "changed", true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.setDataBoolean(mySprite, "blocking", true)
    sprites.setDataBoolean(mySprite, "changed", true)
    playerMoveSpeed = playerMoveSpeedBlocking
    controller.moveSprite(mySprite, playerMoveSpeed, playerMoveSpeed)
})
function doAttack (sprite: Sprite) {
    if (!(sprites.readDataBoolean(sprite, "attacking"))) {
        sprites.setDataBoolean(sprite, "attacking", true)
        sprites.setDataBoolean(sprite, "changed", true)
        controller.moveSprite(sprite, 0, 0)
        timer.after(450, function () {
            sprites.setDataBoolean(sprite, "attacking", false)
            sprites.setDataBoolean(sprite, "changed", true)
            controller.moveSprite(sprite, playerMoveSpeed, playerMoveSpeed)
            updateAnimation(sprite)
        })
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprites.readDataBoolean(sprite, "attacking")) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 50)
        timer.after(500, function () {
            sprites.destroy(otherSprite, effects.ashes, 500)
        })
    } else if (!(sprites.readDataBoolean(sprite, "blocking")) && game.runtime() > playerHitEnd) {
        playerHitEnd = game.runtime() + 1000
        info.changeLifeBy(-1)
    }
})
let playerHitEnd = 0
let mySprite: Sprite = null
let playerMoveSpeed = 0
let playerMoveSpeedBlocking = 0
let playerMoveSpeedIdle = 0
playerMoveSpeedIdle = 60
playerMoveSpeedBlocking = 30
playerMoveSpeed = playerMoveSpeedIdle
info.setLife(5)
info.setScore(0)
overworld.setOverworld16(overworld.createMap16(
overworld.mapRow16(overworld.tilemap16(tilemap`Level1`), overworld.tilemap16(tilemap`Level2`), overworld.tilemap16(tilemap`Level3`), overworld.tilemap16(tilemap`Level4`)),
overworld.mapRow16(overworld.tilemap16(tilemap`Level7`), overworld.tilemap16(tilemap`Level8`), overworld.tilemap16(tilemap`Level9`)),
overworld.mapRow16(overworld.tilemap16(tilemap`Level13`), overworld.tilemap16(tilemap`Level14`), overworld.tilemap16(tilemap`Level15`))
))
overworld.loadMap(1, 2)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
overworld.setPlayerSprite(mySprite)
controller.moveSprite(mySprite, playerMoveSpeed, playerMoveSpeed)
mySprite.z = 50
sprites.setDataNumber(mySprite, "facing", 2)
sprites.setDataBoolean(mySprite, "moving", false)
sprites.setDataBoolean(mySprite, "attacking", false)
sprites.setDataBoolean(mySprite, "blocking", false)
sprites.setDataBoolean(mySprite, "changed", false)
sprites.setDataNumber(mySprite, "animDx", 0)
sprites.setDataNumber(mySprite, "animDy", 0)
let cameraSprite = sprites.create(img`
    3 3 
    3 3 
    `, SpriteKind.Camera)
cameraSprite.setFlag(SpriteFlag.Ghost, true)
cameraSprite.setFlag(SpriteFlag.Invisible, true)
scene.cameraFollowSprite(cameraSprite)
mySprite.vy = 25
timer.after(100, function () {
    mySprite.vy = 0
})
game.onUpdate(function () {
    if (!(sprites.readDataBoolean(mySprite, "moving")) && (mySprite.vx != 0 || mySprite.vy != 0)) {
        sprites.setDataBoolean(mySprite, "moving", true)
        sprites.setDataBoolean(mySprite, "changed", true)
    } else if (sprites.readDataBoolean(mySprite, "moving") && (mySprite.vx == 0 && mySprite.vy == 0)) {
        sprites.setDataBoolean(mySprite, "moving", false)
        sprites.setDataBoolean(mySprite, "changed", true)
    }
    updateAnimation(mySprite)
})
game.onUpdate(function () {
    spriteutils.placeAngleFrom(
    cameraSprite,
    spriteutils.angleFrom(mySprite, cameraSprite),
    spriteutils.distanceBetween(cameraSprite, mySprite) * 1,
    mySprite
    )
})
