const proizvod = document.querySelector('.proizvod')
const dugme = document.querySelector('.dugme')
const kupljen = document.querySelector('.kupljen')

dugme.addEventListener('click', kupio)

function kupio() {
    if (proizvod.value === '') {
        alert('UNESITE ZELJENI PARFEM')
    } else {

        let article = proizvod.value
        kupljen.innerHTML = article + ' Kupljen za 5.670 rsd'
        kupljen.style.backgroundColor = 'steelblue'
    }


}