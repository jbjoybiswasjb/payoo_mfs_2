document.getElementById('add_money_btn')
    .addEventListener('click', function () {

        showOneSection('add_money_section');

        addButtonBg('add_money_btn');




        document.getElementById('add_money_button')
            .addEventListener('click', function (event) {

                event.preventDefault();

                const mainBalance = getInnerTextAmount('main_balance_amount');
                const amount = getInputValueById('amount_to_add');
                const pin = getInputValueById('pin_number_field');

                console.log(mainBalance, amount, pin);
                if (pin === 1234) {

                    const mainBalanceAfterAdd = mainBalance + amount;
                    document.getElementById('main_balance_amount').innerText = mainBalanceAfterAdd;

                }

                else {
                    alert('Something went wrong. Please try again later.');
                }
            })

    })