// add money form section 
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    console.log(id, inputValue, inputNumber);
    return inputNumber;
}

// stat section 
function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// toggle section 
function showSectionById(id) {
    // hide all section 
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}