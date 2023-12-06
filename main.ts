/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Dec 2023
 * This program uses the bluetooth radios
*/

// variables
let distance = 0

// setup
radio.setGroup(8)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  while (true) {
    basic.showIcon(IconNames.Happy)
    distance = sonar.ping(
      DigitalPin.P1,
      DigitalPin.P2,
      PingUnit.Centimeters
    )
    if (distance < 10) {
      basic.showIcon(IconNames.Sad)
      radio.sendString('Too close!')
    }
    radio.onReceivedString(function (receivedString) {
      basic.clearScreen()
      basic.showString(receivedString)
      basic.showIcon(IconNames.Happy)
    })
  }
})
