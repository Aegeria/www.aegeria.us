const
    recoveryForm = document.getElementById('recovery-form'),
    resetForm = document.getElementById('reset-form'),
    resetDisplay = document.getElementById('reset-display'),
    resetError = document.getElementById('reset-error'),
    apiKey = document.getElementById('api-key'),
    cancelForm = document.getElementById('cancel-form'),
    cancelDisplay = document.getElementById('cancel-display'),
    cancelError = document.getElementById('cancel-error');

function show(element) {
    element.classList.remove('display-none');

    return new Promise(function(resolve) {
        setTimeout(function() {
            element.classList.remove('opacity-none');

            setTimeout(function() {
                resolve(element);
            }, 400);
        }, 15);
    });
}

function hide(element) {
    element.classList.add('opacity-none');

    return new Promise(function(resolve) {
        setTimeout(function() {
            element.classList.add('display-none');
            resolve(element);
        }, 400);
    });
}

recoveryForm.addEventListener('submit', function (event) {
    event.preventDefault();

    fetch(baseUrl + '/account/recover', {
        'body': JSON.stringify({
            'email': document.getElementById('recovery-email').value,
        }),
        'headers': {
            'Content-Type': 'application/json',
        } ,
        'method': 'POST',
    })
        .then(() => hide(recoveryForm))
        .then(() => show(resetForm));
});

resetForm.addEventListener('submit', function (event) {
    event.preventDefault();

    fetch(baseUrl + '/account/reset', {
        'body': JSON.stringify({
            'email': document.getElementById('recovery-email').value,
            'token': document.getElementById('reset-token').value,
        }),
        'headers': {
            'Content-Type': 'application/json',
        } ,
        'method': 'POST',
    }).then(async function (response) {
        const data = await response.json();

        if (response.status === 401) {
            resetError.innerText = 'Looks like your reset code is wrong. Double-check it and try again.';

            return;
        }

        if (response.status === 422) {
            if (data.email) {
                resetError.innerText = data.email;
            } else if (data.token) {
                resetError.innerText = data.token;
            }

            return;
        }

        if (!response.ok) {
            resetError.innerText = "Uh oh. Something went wrong. Try this again sometime later.";

            return;
        }

        if (data.key) {
            apiKey.innerText = data.key;

            hide(resetForm).then(() => show(resetDisplay));
        }
    });
});

cancelForm.addEventListener('submit', function (event) {
    event.preventDefault();

    fetch(baseUrl + '/account/cancel', {
        'credentials': 'same-origin',
        'headers': {
            'Authorization': 'Bearer ' + document.getElementById('cancel-key').value,
        } ,
        'method': 'POST',
    }).then(async function (response) {
        if (!response.ok) {
            cancelError.innerText = "Uh oh. Something went wrong. Did you enter the right key?";

            return;
        }

        hide(cancelForm).then(() => show(cancelDisplay));
    });
});