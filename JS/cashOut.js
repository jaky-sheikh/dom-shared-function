document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('cash-out-input');
        const pinNumber = getInputFieldValueById('cash-out-pin');

        //data validation
        if (isNaN(cashOut)) {
            alert('Failed to cash out.');
            return;
        }

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');

            if (cashOut > balance) {
                alert('You do not have enough money.');
                return;
            }

            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;
            //add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
            <h4 class="text-xl font-bold">Cash Out</h4>
            <p>${cashOut} withdraw. New balance ${newBalance}</p>
            `
            document.getElementById('transaction-container').appendChild(div);
        }
        else {
            alert('Failed to cash out');
        }
    })