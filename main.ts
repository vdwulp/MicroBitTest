enum ExtraIconNames {
    //% block="ZoomRight"
    //% jres=extraicons.zoomright
    First,
    //% block="ZoomLeft"
    //% jres=extraicons.zoomleft
    Second,
    //% block="MicroBit"
    //% jres=extraicons.microbit
    Third
}
namespace LEDTesting {

    //% block
    //% icon.fieldEditor="gridpicker"
    //% icon.fieldOptions.width=220
    //% icon.fieldOptions.columns=3
    export function showIcon(icon: ExtraIconNames, interval = 600) {
        let res;
        switch (icon) {
            case ExtraIconNames.First:
                res = images.createImage(
                    ` . . # # #
                      . . # . #
                      . . # # #
                      . # . . .
                      # . . . .` )
                break
            case ExtraIconNames.Second:
                res = images.createImage(
                    ` # # # . .
                      # . # . .
                      # # # . .
                      . . . # .
                      . . . . #` )
                break
            case ExtraIconNames.Third:
                res = images.createImage(
                    ` . . . . .
                      # # # # #
                      # . # . #
                      # # # # #
                      . . . . .` )
                break
            default:
                res = images.createImage(
                    ` # . . . .
                      . # . . .
                      . . # # #
                      . . # . #
                      . . # # #` )
        }
        res.showImage(0, 600)
    }

}
basic.forever(function () {
    LEDTesting.showIcon(ExtraIconNames.First, 500)
    LEDTesting.showIcon(ExtraIconNames.Second, 500)
})
