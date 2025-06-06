export function cardProgress(client, quant) {
  const divText = document.getElementById('text')

  const strongText = document.createElement('strong')
  strongText.textContent = (10-quant)

  const spanText = document.createElement('span')
  spanText.textContent = (' cortes restantes')

  divText.appendChild(strongText)
  divText.appendChild(spanText)

  const divLinear = document.getElementById('linear')

  const spanLinear = document.createElement('span')
  spanLinear.classList.add('remove')
  spanLinear.textContent = (`${quant} de 10`)

  divLinear.appendChild(spanLinear)

  const windowWidth = window.innerWidth;
  const divBar = document.getElementById('bar')
  let largura;
  if (windowWidth >= 1250) {
    largura = quant * 2.2;
  } else {
    largura = quant * 1.5;
  }
  
  divBar.style.width = `${largura}rem`;

}