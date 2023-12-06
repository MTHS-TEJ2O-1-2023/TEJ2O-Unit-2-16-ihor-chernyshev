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

// button A
input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Yes)
  basic.pause(500)
  basic.showIcon(IconNames.Happy)
  while (true) {
    // checks the distance
    distance = sonar.ping(
      DigitalPin.P1,
      DigitalPin.P2,
      PingUnit.Centimeters
    )
    if (distance > 10) {
      basic.showIcon(IconNames.Happy)
    }
    // sends info if distance less than 10
    if (distance < 10) {
      basic.showIcon(IconNames.Sad)
      radio.sendString('Too close!')
      basic.pause(9500)
    }
  }
})

// Button B
input.onButtonPressed(Button.B, function () {
  basic.showIcon(IconNames.Yes)
  basic.pause(500)
  basic.showIcon(IconNames.Happy)
  // receives info
  radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
  })
})
