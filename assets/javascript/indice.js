const btnIndice = document.getElementById('btn-indice');

function botaoToggle(event) {
  const menuLink = document.getElementById('menuLink');
  menuLink.classList.toggle('active');
  const active = menuLink.classList.contains('active');
  event.currentTarget.setAttribute('btn-indice', active);

  if (active) {
    btnIndice.textContent = 'Fechar';
    btnIndice.style.background = '#133e6a';
    btnIndice.style.color = '#fff';
  } else {
    btnIndice.textContent = 'Abrir +';
    btnIndice.style.background = '#e9f2f5'
    btnIndice.style.color = '#111';
    btnIndice.style.border = '1px solid #c5dcfe';
  }
}

const button = document.querySelector('.btn-top');

window.addEventListener('scroll', (event) => {
  if (window.scrollY == 0) {
    button.classList.remove('visible');
  } else {
    button.classList.add('visible');
  }
});

btnIndice.addEventListener('click', botaoToggle);


