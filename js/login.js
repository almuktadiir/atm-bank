document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('its working dude')

    //step:2 email address collection from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log('kam hoitachere')

    //step:3 password collection from input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password)

    // step:4 (Danger: this shouldn't do on client site)
    if (email === 'bank@account.com' && password === 'bank1') {
        window.location.href = "bank.html"
    }
    else {
        alert('invalid user')
    }

})