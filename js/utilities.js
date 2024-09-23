// Get inner text amount.
function getInnerTextAmount(id) {
    const innerText = document.getElementById(id).innerText;
    const innerTextAmount = parseFloat(innerText);
    return innerTextAmount;
}

// Get input value by id.
function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;

    const valueNumber = parseFloat(inputValue);
    return valueNumber;
}

// Show specific one form section.
function showOneSection(id) {

    document.getElementById('latest_payment_section').classList.add('hidden');
    document.getElementById('add_money_section').classList.add('hidden');
    document.getElementById('cash_out_section').classList.add('hidden');
    document.getElementById('transfer_money_section').classList.add('hidden');
    document.getElementById('get_bonus_section').classList.add('hidden');
    document.getElementById('pay_bill_section').classList.add('hidden');
    document.getElementById('transactions_history_section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}



// Button bg, border, text color after click.
function addButtonBg(id) {

    document.getElementById('add_money_btn').style.borderColor = "";
    document.getElementById('add_money_btn').style.backgroundColor = "";
    document.getElementById('add_money_btn').style.color = "";

    document.getElementById('pay_bill_btn').style.borderColor = "";
    document.getElementById('pay_bill_btn').style.backgroundColor = "";
    document.getElementById('pay_bill_btn').style.color = "";

    document.getElementById('get_bonus_btn').style.borderColor = "";
    document.getElementById('get_bonus_btn').style.backgroundColor = "";
    document.getElementById('get_bonus_btn').style.color = "";

    document.getElementById('transfer_money_btn').style.borderColor = "";
    document.getElementById('transfer_money_btn').style.backgroundColor = "";
    document.getElementById('transfer_money_btn').style.color = "";

    document.getElementById('cash_out_btn').style.borderColor = "";
    document.getElementById('cash_out_btn').style.backgroundColor = "";
    document.getElementById('cash_out_btn').style.color = "";

    document.getElementById('transactions_btn').style.borderColor = "";
    document.getElementById('transactions_btn').style.backgroundColor = "";
    document.getElementById('transactions_btn').style.color = "";





    // document.getElementById(id).classList.add('border-button', 'bg-button/05', 'text-button')

    document.getElementById(id).style.borderColor = "rgb(8, 116, 242)";
    document.getElementById(id).style.backgroundColor = "rgba(8, 116, 242, 0.05)";
    document.getElementById(id).style.color = "rgb(8, 116, 242)";


}