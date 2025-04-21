enum ExtraIconNames {
    //% block="ball"
    //% jres=extraicons.ball
    Ball,
    //% block="magnifier"
    //% jres=extraicons.magnifier
    Magnifier,
    //% block="microsoft"
    //% jres=extraicons.microsoft
    Mircosoft,
    //% block="microbit"
    //% jres=extraicons.microbit
    Microbit,
    //% block="music"
    //% jres=extraicons.music
    Music,
    //% block="notes"
    //% jres=extraicons.notes
    Notes,
    //% block="horizontal"
    //% jres=extraicons.horizontal
    Horizontal,
    //% block="vertical"
    //% jres=extraicons.vertical
    Vertical,
    //% block="grid"
    //% jres=extraicons.grid
    Grid,
    //% block="diagonal1"
    //% jres=extraicons.diagonal1
    Diagonal1,
    //% block="diagonal2"
    //% jres=extraicons.diagonal2
    Diagonal2,
    //% block="heart"
    //% jres=extraicons.heart
    Heart,
    //% block="house"
    //% jres=extraicons.house
    House,
    //% block="skull"
    //% jres=extraicons.skull
    Skull,
    //% block="duck"
    //% jres=extraicons.duck
    Duck,
    //% block="dog"
    //% jres=extraicons.dog
    Dog,
    //% block="cat"
    //% jres=extraicons.cat
    Cat
}
namespace ExtraIcons {

    //% block
    //% weight=90 blockGap=8
    //% icon.fieldEditor="imagedropdown"
    //% icon.fieldOptions.columns="5"
    //% icon.fieldOptions.width="380"
    //% icon.fieldOptions.maxRows=4
    export function showExtraIcon(icon: ExtraIconNames) {
        let res = extraIconImage(icon)
        res.showImage(0, 600)
    }

    //% block
    //% imageLiteral=1
    //% imageLiteralColumns=8
    //% imageLiteralRows=8
    //% shim=images::createImage
    export function createCustomImage(i: String): Image {
        const im = <Image><any>i
        for (let y = 0; y < im.height(); ++y) {
            for (let x = 0; x < im.width(); ++x) {
                if (im.pixel(x, y)) {
                    console.log(".")
                }
            }
        }
        return im
    }

    //% block
    //% imageLiteral=1
    //% imageLiteralColumns=8
    //% imageLiteralRows=8
    //% shim=basic::showLeds
    export function showCustomImage(i: String) {
        const im2 = <Image><any>i;
        for (let y2 = 0; y2 < im2.height(); ++y2) {
            for (let x2 = 0; x2 < im2.width(); ++x2) {
                if (im2.pixel(x2, y2)) {
                    console.log(".")
                }
            }
        }
    }

    //% block
    //% weight=50 blockGap=8
    //% i.fieldEditor="imagedropdown"
    //% i.fieldOptions.columns="5"
    //% i.fieldOptions.width="380"
    //% i.fieldOptions.maxRows=4
    export function extraIconImage(i: ExtraIconNames): Image {
        switch (i) {
            case ExtraIconNames.Ball: return images.createImage(
                ` . # # # .
                  # # # # #
                  # # # # #
                  # # # # #
                  . # # # .` )
            case ExtraIconNames.Magnifier: return images.createImage(
                ` # # # . .
                  # . # . .
                  # # # . .
                  . . . # .
                  . . . . #` )
            case ExtraIconNames.Mircosoft: return images.createImage(
                ` # # . # #
                  # # . # #
                  . . . . .
                  # # . # #
                  # # . # #` )
            case ExtraIconNames.Microbit: return images.createImage(
                ` . . . . .
                  # # # # #
                  # . # . #
                  # # # # #
                  . . . . .` )
            case ExtraIconNames.Music: return images.createImage(
                ` . # # # #
                  . # . . #
                  . # . # #
                  # # . # #
                  # # . . .` )
            case ExtraIconNames.Notes: return images.createImage(
                ` . . . . #
                  . # . . #
                  . # . # #
                  # # . # #
                  # # . . .` )
            case ExtraIconNames.Horizontal: return images.createImage(
                ` # # # # #
                  . . . . .
                  # # # # #
                  . . . . .
                  # # # # #` )
            case ExtraIconNames.Vertical: return images.createImage(
                ` # . # . #
                  # . # . #
                  # . # . #
                  # . # . #
                  # . # . #` )
            case ExtraIconNames.Grid: return images.createImage(
                ` # . # . #
                  . . . . .
                  # . # . #
                  . . . . .
                  # . # . #` )
            case ExtraIconNames.Diagonal1: return images.createImage(
                ` . # . . #
                  # . . # .
                  . . # . .
                  . # . . #
                  # . . # .` )
            case ExtraIconNames.Diagonal2: return images.createImage(
                ` # . . # .
                  . # . . #
                  . . # . .
                  # . . # .
                  . # . . #` )
            case ExtraIconNames.Heart: return images.createImage(
                `. # . # .
                 # . # . #
                 # . . . #
                 . # . # .
                 . . # . .` )
            case ExtraIconNames.House: return images.createImage(
                `. . # . .
                 . # # # .
                 # # # # #
                 # . # . #
                 # # # . #`)
            case ExtraIconNames.Skull: return images.createImage(
                `. # # # .
                 # # # # #
                 # . # . #
                 . # . # .
                 . # # # .`)
            case ExtraIconNames.Duck: return images.createImage(
                `. . # # .
                 . . # # #
                 # # # # .
                 # # # # .
                 . # # . .`)
            case ExtraIconNames.Dog: return images.createImage(
                `. . . # #
                 . . . # #
                 # # # # .
                 . # # # .
                 . # . # .` )
            case ExtraIconNames.Cat: return images.createImage(
                `# . . # #
                 # . . # #
                 # # # # .
                 . # # # .
                 . # . # .` )
            default: return images.createImage(
                ` . # # # .
                  # . . . #
                  . . . # .
                  . . # . .
                  . . # . .` )
        }
    }

}
basic.forever(function () {
    ExtraIcons.showExtraIcon(ExtraIconNames.Heart)
    ExtraIcons.showExtraIcon(ExtraIconNames.House)
    ExtraIcons.showExtraIcon(ExtraIconNames.Skull)
    ExtraIcons.showExtraIcon(ExtraIconNames.Duck)
    ExtraIcons.showExtraIcon(ExtraIconNames.Dog)
    ExtraIcons.showExtraIcon(ExtraIconNames.Cat)
})
