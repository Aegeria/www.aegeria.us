const
    recoveryForm = document.getElementById('recovery-form'),
    recoveryDisplay = document.getElementById('recovery-display'),
    apiKey = document.getElementById('api-key');

recoveryForm.addEventListener('submit', function (event) {
    event.preventDefault();

    fetch(baseUrl + '/account/recover', {
        'body': JSON.stringify({
            'email': document.getElementById('recovery-email').value,
        }),
        'headers': {
            'Authorization': 'Bearer ' + key,
            'Content-Type': 'application/json',
        } ,
        'method': 'POST',
    }).then(function () {
        return hide(recoveryForm);
    }).then(function () {
        return show(recoveryDisplay);
    });
});