document.getElementById('login_button')
    .addEventListener('click', function (event) {

        event.preventDefault();

        const pinNumber = getInputValueById('pin_number_field');
        const mobileNumber = '0' + getInputValueById('mobile_number_field');

        console.log(pinNumber, mobileNumber);

        // Bad way of verification.
        if (pinNumber === 1234 && mobileNumber === '018') {
            
            document.location.href = '/home_page.html';
        }

        else {
            alert('Please give correct pin number or mobile number.');
        }

    });