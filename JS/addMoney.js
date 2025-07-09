document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // console.log('btn clicked')

        const addMoney = getInputFieldValueById('add-money-input');
        const pinNumber = getInputFieldValueById('add-money-pin');

        // data validation 
        if (isNaN(addMoney)) {
            alert('Failed to add money.')
            return;
        }

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;

            // add to transaction history
            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
            // console.log(p);

            // should be a common function
            document.getElementById('transaction-container').appendChild(p);

            // console.log('My current balance is ', balance, newBalance);
        }
        else {
            alert('Failed to add money');
        }
        // console.log('add money inside addMoney.js', addMoney, pinNumber);
    })