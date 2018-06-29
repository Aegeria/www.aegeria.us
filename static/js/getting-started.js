const baseUrl = 'https://api.aegeria.us',
    stripe = Stripe('pk_live_PyuQ2VIFQYvV7y43zdhjkWWi'),
    elements = stripe.elements(),
    card = elements.create('card'),
    accountForm = document.getElementById('account-form'),
    accountError = document.getElementById('account-error'),
    cardForm = document.getElementById('card-form'),
    cardError = document.getElementById('card-error'),
    keyDisplay = document.getElementById('key-display'),
    apiKey = document.getElementById('api-key');

let key;

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

accountForm.addEventListener('submit', function (event) {
    event.preventDefault();

    fetch(baseUrl + '/account', {
        'body': JSON.stringify({
            'email': document.getElementById('email').value,
            'name': document.getElementById('name').value,
        }),
        'headers': {
            'Content-Type': 'application/json',
        },
        'method': 'POST',
    })
        .then(async function (response) {
            const data = await response.json();

            if (response.status === 422) {
                if (data.email) {
                    accountError.innerText = data.email;
                } else if (data.name) {
                    accountError.innerText = data.name;
                }

                return;
            }

            if (!response.ok) {
                accountError.innerText = "We're sorry, something went wrong processing your request. Please try again later.";

                return;
            }

            if (data.key) {
                key = data.key;

                hide(accountForm).then(() => show(cardForm));
            }
        });
});

card.mount('#card-element');

card.addEventListener('change', function ({error}) {
    cardError.innerText = error ? error.message : '';
});

cardForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const {token, error} = await stripe.createToken(card);

    if (error) {
        cardError.innerText = error.message;

        return;
    }

    fetch(baseUrl + '/account/card', {
        'body': JSON.stringify({
            'stripeToken': token,
        }),
        'credentials': 'same-origin',
        'headers': {
            'Authorization': 'Bearer ' + key,
            'Content-Type': 'application/json',
        } ,
        'method': 'POST',
    })
        .then(function (response) {
            if (!response.ok) {
                cardError.innerText = "We're sorry, something went wrong processing your request. Please try again later.";

                return;
            }

            fetch(baseUrl + '/account/subscribe', {
                'headers': {
                    'Authorization': 'Bearer ' + key,
                } ,
                'method': 'POST',
            }).then(function(response) {
                if (!response.ok) {
                    cardError.innerText = "We're sorry, something went wrong processing your request. Please try again later.";

                    return;
                }

                hide(cardForm).then(function () {
                    apiKey.innerText = key;

                    show(keyDisplay);
                })
            });
        });
});