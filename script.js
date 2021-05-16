const sifra = document.querySelector('.pass')
const imejl = document.querySelector('.mail')
const dugme = document.querySelector('.btn')
const msgdeliver = document.querySelector('.msg')

dugme.addEventListener('click', press)

function press() {
    if (sifra.value === 'nemanja' && imejl.value === 'gmail') {
        location.assign('http://127.0.0.1:5500/logg.html')
    } else if (sifra.value === '' && imejl.value === '') {
        alert('NEED PASS OR EMAIL')
    } else {
        msgdeliver.innerHTML = 'WRONG PASS OR EMAIL!'
        msgdeliver.style.color = 'red'
        msgdeliver.style.fontWeight = 'bold'

    }
}
