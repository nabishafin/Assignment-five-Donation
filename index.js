

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
            ` ${updateAmount} Taka is Donated at Noakhali, Bangladesh.
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
            ` ${updateAmount} Taka is Donated at Feni, Bangladesh.
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
            `  ${updateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh. 
            <br>
            <p>${now}</p>
         `
        const historyDiv = AddedHistory("hidtory")
        historyDiv.appendChild(div)
    }
})



// toggle section

document.getElementById('donation-btn').addEventListener('click', function () {
    // bg-color
    const donationbtn = document.getElementById('donation-btn');
    donationbtn.classList.add('bg-[#B4F461]')

    const historybtn = document.getElementById('History-btn');
    historybtn.classList.remove('bg-[#B4F461]')


    // hide history section

    const HistoeySection = document.getElementById('history_section');
    HistoeySection.classList.add('hidden')

    const donationSection = document.getElementById('donation_section');
    console.log(donationSection)
    donationSection.classList.remove('hidden')

})


document.getElementById('History-btn').addEventListener('click', function () {
    const donationbtn = document.getElementById('donation-btn');
    donationbtn.classList.remove('bg-[#B4F461]')

    const historybtn = document.getElementById('History-btn');
    historybtn.classList.add('bg-[#B4F461]')


    const HistoeySection = document.getElementById('history_section');
    HistoeySection.classList.remove('hidden')

    const donationSection = document.getElementById('donation_section');
    console.log(donationSection)
    donationSection.classList.add('hidden')

})



// blog section

document.getElementById('blog').addEventListener('click', function () {
    const donationSection = document.getElementById('donation_section');
    donationSection.classList.add('hidden')
    const HistoeySection = document.getElementById('history_section');
    HistoeySection.classList.add('hidden')
    const faq = document.getElementById('faq-section');
    faq.classList.remove('hidden')
    const btnDiv = document.getElementById('btn-div');
    btnDiv.classList.add('hidden')
})

// back to Home

document.getElementById('backTohHome').addEventListener('click', function () {
    const donationSection = document.getElementById('donation_section');
    donationSection.classList.remove('hidden')
    const HistoeySection = document.getElementById('history_section');
    HistoeySection.classList.add('hidden')
    const faq = document.getElementById('faq-section');
    faq.classList.add('hidden')
    const btnDiv = document.getElementById('btn-div');
    btnDiv.classList.remove('hidden')
})


