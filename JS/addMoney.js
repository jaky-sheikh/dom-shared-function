document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('btn clicked')

        const addMoney = getInputFieldValueById('add-money-input');
        const pinNumber = getInputFieldValueById('add-money-pin');

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');
            console.log('My current balance is ', balance);
        }
        else {
            alert('Failed to add money');
        }
        console.log('add money inside addMoney.js', addMoney, pinNumber);
    })