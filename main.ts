while (true) {
    console.log("Sound Level:" + input.lightLevel() + " TempF:" + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 100 && input.soundLevel() < 2) {
        light.setBrightness(5)
        light.setAll(light.rgb(153, 51, 255))
        music.setVolume(50)
        music.playMelody("E B C5 A B G A F ", 120)
    }
    
}
