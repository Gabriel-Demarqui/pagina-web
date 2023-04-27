const abrir = document.getElementById('abrir')
const fechar = document.getElementById('fechar')
const container = document.querySelector('.container')

abrir.addEventListener('click', () => container.classList.add('rodar-nav'))
fechar.addEventListener('click', () => container.classList.remove('rodar-nav'))

