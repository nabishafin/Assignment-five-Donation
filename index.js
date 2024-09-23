

// 1st part....
document.getElementById('noakhali-button').addEventListener('click', function () {

    // input value by function
    const inputValue = getInPutNumberValue('noakhali-input')

    if (typeof inputValue === 'number' && inputValue > 0) {

        // get donation amount by function
        const numberAmount = getValueInput('noakhaliAmount')

        const updateAmount = numberAmount + inputValue;
        document.getElementById('noakhaliAmount').innerText = updateAmount

        // step -2

        // get mainvalence by function
        const numbeMyBalence = getmainBalence('mainBalence')

        // update value in my balence
        const updatemyBalence = numbeMyBalence - inputValue

        document.getElementById('mainBalence').innerText = updatemyBalence
    }
})

// 2nd Part

document.getElementById('feniHandle').addEventListener('click', function () {

    const inputValue = getInPutNumberValue('feniInputValue')

    if (typeof inputValue === 'number' && inputValue > 0) {
        const numberAmount = getValueInput('feniDonationAmount')

        const updateAmount = numberAmount + inputValue;
        document.getElementById('feniDonationAmount').innerText = updateAmount

        const numbeMyBalence = getmainBalence('mainBalence')
        const updatemyBalence = numbeMyBalence - inputValue;
        document.getElementById('mainBalence').innerText = updatemyBalence
    }
})