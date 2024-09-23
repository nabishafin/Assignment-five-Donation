

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

        const nowNoaBalance = document.getElementById('mainBalence').innerText = updatemyBalence

        // add to history
        const now = new Date();
        const div = document.createElement('div')
        div.classList.add('border-2')
        div.classList.add('p-4')
        div.classList.add('mt-4')
        div.innerHTML =
            ` ${inputValue} Taka is Donated at Noakhali, Bangladesh.
            <br>
            <p>${now}</p>
        `
        const historyDiv = AddedHistory("hidtory")
        historyDiv.appendChild(div)
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

        // add to history
        const now = new Date();
        const div = document.createElement('div')
        div.classList.add('border-2')
        div.classList.add('p-4')
        div.classList.add('mt-4')
        div.innerHTML =
            ` ${inputValue} Taka is Donated at Feni, Bangladesh.
               <br>
               <p>${now}</p>
         `
        const historyDiv = AddedHistory("hidtory")
        historyDiv.appendChild(div)
    }
})

// 3rd part
document.getElementById('kotHandleClick').addEventListener('click', function () {
    const inputValue = getInPutNumberValue('kotaValue')

    if (typeof inputValue === 'number' && inputValue > 0) {
        const numberAmount = getValueInput('kotaDonationAmount')

        const updateAmount = numberAmount + inputValue;
        document.getElementById('kotaDonationAmount').innerText = updateAmount

        const numbeMyBalence = getmainBalence('mainBalence')
        const updatemyBalence = numbeMyBalence - inputValue;
        document.getElementById('mainBalence').innerText = updatemyBalence


        // add to history
        const now = new Date();
        const div = document.createElement('div')
        div.classList.add('border-2')
        div.classList.add('p-4')
        div.classList.add('mt-4')
        div.innerHTML =
            `  ${inputValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh. 
            <br>
            <p>${now}</p>
         `
        const historyDiv = AddedHistory("hidtory")
        historyDiv.appendChild(div)
    }
})

15500 