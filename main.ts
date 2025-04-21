enum ExtraIconNames {
    //% block="Ball"
    //% jres=extraicons.ball
    Ball,
    //% block="Magnifier"
    //% jres=extraicons.magnifier
    Magnifier,
    //% block="MicroBit"
    //% jres=extraicons.microbit
    MicroBit,
    //% block="Notes"
    //% jres=extraicons.notes
    Notes,
    //% block="Horizontal"
    //% jres=extraicons.horizontal
    Horizontal,
    //% block="Vertical"
    //% jres=extraicons.vertical
    Vertical,
    //% block="Grid"
    //% jres=extraicons.grid
    Grid,
    //% block="Diagonal1"
    //% jres=extraicons.diagonal1
    Diagonal1,
    //% block="Diagonal2"
    //% jres=extraicons.diagonal2
    Diagonal2,
    //% block="Windows"
    //% jres=extraicons.windows
    Windows
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
            case ExtraIconNames.MicroBit: return images.createImage(
                ` . . . . .
                  # # # # #
                  # . # . #
                  # # # # #
                  . . . . .` )
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
            case ExtraIconNames.Windows: return images.createImage(
                ` # # . # #
                  # # . # #
                  . . . . .
                  # # . # #
                  # # . # #` )
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
    ExtraIcons.showExtraIcon(ExtraIconNames.Grid)
    ExtraIcons.showExtraIcon(ExtraIconNames.Windows)
    ExtraIcons.showExtraIcon(ExtraIconNames.Diagonal2)
    ExtraIcons.showExtraIcon(ExtraIconNames.Diagonal1)
    basic.showIcon(IconNames.Happy)
})
