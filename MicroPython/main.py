"""
Created by: Ihor Chernyshev
Created on: Dec 2023
This program uses the bluetooth radios
"""

# importing libraries
from microbit import *
import radio
from machine import time_pulse_us

# variables
dist_cm = 0

# setup
radio.config(group=8)
display.clear()
display.show(Image.HAPPY)

tring = pin1
echo = pin2

tring.write_digital(1)
echo.read_digital()

# finding the distance
while True:
    if button_a.was_pressed():
        display.show(Image.YES)
        sleep(500)
        display.show(Image.HAPPY)
        while True:
            tring.write_digital(1)
            tring.write_digital(0)
            micros = time_pulse_us(echo, 2)
            t_echo = micros / 1000000
            dist_cm = (t_echo / 2) * 34300
            if dist_cm > 10:
                display.show(Image.HAPPY)
            if dist_cm < 10:
                display.show(Image.SAD)
                radio.on()
                radio.send("Too close!")
                sleep(9500)
    if button_b.was_pressed():
        display.show(Image.YES)
        sleep(500)
        display.show(Image.HAPPY)
        radio.on()
        while True:
            message = radio.receive()
            display.scroll(message)
