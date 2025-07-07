document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('btn clicked')

        const addMoney = getInputFieldValueById('add-money-input');
        const pinNumber = getInputFieldValueById('add-money-pin');

        if (pinNumber === 1234) {
            console.log('Add money successful')
        }
        else {
            alert('Failed to add money');
        }
        console.log('add money inside addMoney.js', addMoney, pinNumber);
    })