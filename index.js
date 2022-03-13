// Error #1
function shout(string) {
    return string.toUpperCase()

}
// Error #2
function whisper(string) {
    return string.toLowerCase()
}
// Error #3
function logShout(string) {

    console.log(string.toUpperCase())
}
// Error #4
function logWhisper(string) {

    console.log(string.toLowerCase())

}
function sayHiToHeadphonedRoommate(string) {
    
    if (string.toUpperCase() === string) {
        return "YES INDEED!"
    }
    else if (string.toLowerCase() === string) {
        return "I can't hear you!"
    }
    else if (string === "Let's have dinner together!") {
        return "I would love to!"
    }

}

