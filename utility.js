// get inputvalue by function

function getInPutNumberValue(id) {
    const input = document.getElementById(id).value;
    const Value = parseFloat(input)
    return Value
}

// get  donation amount by function
function getValueInput(id) {
    const amount = document.getElementById(id).innerHTML
    const numberAmount = parseFloat(amount)
    return numberAmount
}
// get mainbalence by function

function getmainBalence(id) {
    const myBalence = document.getElementById(id).innerText
    const Balence = parseFloat(myBalence);
    return Balence
}


// added history function

function AddedHistory(id) {
    const historyDiv = document.getElementById(id);
    return historyDiv

}


