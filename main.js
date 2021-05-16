const dugmeProdavnica = document.querySelector('.dugme-prodavnica')
const text = document.querySelector('.prodavnice')

dugmeProdavnica.addEventListener('click', lokacija)

function lokacija() {

    text.innerHTML = 'NASE PRODAVNICE SE NALAZE NA SLAVIJI 34/5 I KNEZA MILOSA 87/3'
    text.style.color = 'blue'
    text.style.fontSize = '13px'
}