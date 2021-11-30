input.onButtonPressed(Button.A, function () {
    radio.sendString("" + Received_Word + "tail")
})
radio.onReceivedString(function (receivedString) {
    Received_Word = receivedString
    basic.showString(Received_Word)
    radio.setGroup(60)
})
let Received_Word = ""
radio.setGroup(50)
