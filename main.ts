/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program uses the bluetooth radios
*/

// variables
let distance = 0

// setup
radio.setGroup(1)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
  while(true) {
    distance = sonar.ping(
      DigitalPin.P1,
      DigitalPin.P2,
      PingUnit.Centimeters
    )
    if (distance < 10) {
      basic.showIcon(IconNames.Sad)
      radio.sendString("Too close!")
    }
  }
})

