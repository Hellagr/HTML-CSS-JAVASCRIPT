const h1 = document.querySelector('h1');
const inputTt = document.querySelector('input');

inputTt.addEventListener('input', function (e) {

    const backMessage = 'Welcome,';
    h1.innerText = (`${backMessage} ${inputTt.value}`);

    if (h1.innerText == backMessage) {
        h1.innerText = 'Enter Your Username'
    }
});