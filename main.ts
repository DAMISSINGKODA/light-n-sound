let police = false
input.onButtonPressed(Button.AB, function () {
    police = true
    Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
})
