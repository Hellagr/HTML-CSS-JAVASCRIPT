const h1 = document.querySelector('h1');
const b = document.querySelector('b');
const b2 = document.querySelector('#b2');
const selectScore = document.querySelector('#selectScore');
let score = 'none';
let i = 0;
let n = 0;
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

selectScore.addEventListener('click', function (e) {
    score = selectScore.value;

})

btn1.addEventListener('click', function (e) {
    i++;
    if (i < score) {

        b.innerText = `${i}`;
    }

    else if (score == i) {
        b.innerText = `${i}`;
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        b.style.color = 'green';
        b2.style.color = 'red';
    }

}
)

btn2.addEventListener('click', function (e) {
    n++;
    if (score > n) {

        b2.innerText = `${n}`;
    }
    else if (score == n) {
        b2.innerText = `${n}`;
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        b.style.color = 'red';
        b2.style.color = 'green';
    }
})

btn3.addEventListener('click', function (e) {
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    i = 0;
    n = 0;
    b2.innerText = `${0}`;
    b.innerText = `${0}`;
    selectScore.value = ('')
    b.style.color = 'black';
    b2.style.color = 'black';
})

