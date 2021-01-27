const vibes = [
    "...and you are awesome",
    "... have a wonderful day",
    "...and you've got this"
]

// choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

// display in the browser
document.querySelector(".vibe").append(vibe)