while True:
    print("Sound Level:" + input.light_level() + " TempF:" + input.temperature(TemperatureUnit.FAHRENHEIT))
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 100 and input.sound_level() < 2:
        light.set_brightness(5)
        light.set_all(light.rgb(153,51,255))
        music.set_volume(50)
        music.play_melody("E B C5 A B G A F ", 120)
