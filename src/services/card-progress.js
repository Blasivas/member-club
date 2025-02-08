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

  const divBar = document.getElementById('bar')
  const largura = quant*2.2
  divBar.style.width = `${largura}rem`

    
}