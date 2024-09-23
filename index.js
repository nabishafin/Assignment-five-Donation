

// 1st part....
document.getElementById('noakhali-button').addEventListener('click', function (e) {
    e.preventDefault;
    const input = document.getElementById('noakhali-input').value;
    const inputValue = parseFloat(input)

    if (typeof inputValue === 'number' && inputValue > 0) {
        const amount = document.getElementById('noakhaliAmount').innerHTML
        const numberAmount = parseFloat(amount)
        const updateAmount = numberAmount + inputValue;
        document.getElementById('noakhaliAmount').innerText = updateAmount

        // step -2

        const myBalence = document.getElementById('mainBalence').innerText
        const numbeMyBalence = parseFloat(myBalence);

        const updatemyBalence = numbeMyBalence - inputValue

        document.getElementById('mainBalence').innerText = updatemyBalence
    }

})