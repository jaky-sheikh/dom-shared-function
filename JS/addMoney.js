document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('btn clicked')

        const addMoney = getInputFieldValueById('add-money-input');
        console.log('add money inside addMoney.js', addMoney);
    })