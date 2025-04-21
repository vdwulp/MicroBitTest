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
    Notes
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
    ExtraIcons.showExtraIcon(ExtraIconNames.Ball)
    ExtraIcons.showExtraIcon(ExtraIconNames.Magnifier)
    ExtraIcons.showExtraIcon(ExtraIconNames.MicroBit)
    ExtraIcons.showExtraIcon(ExtraIconNames.Notes)
    basic.showIcon(IconNames.Happy)
})
