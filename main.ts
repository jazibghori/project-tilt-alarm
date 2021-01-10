function thiefalarm () {
    basic.showIcon(IconNames.Angry)
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
}
radio.onReceivedString(function (receivedString) {
    thiefalarm()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("thief")
    thiefalarm()
})
radio.setGroup(1)
