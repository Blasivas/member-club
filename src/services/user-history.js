export function userHistory(client) {
  const quant = client.loyaltyCard.totalCuts
  
  const divHead = document.getElementById('history-head')

  const spanHead1 = document.createElement('span')
  spanHead1.textContent = 'HISTORICO'

  const spanHead2 = document.createElement('span')
  spanHead2.textContent = `${client.loyaltyCard.totalCuts} cortes`
  
  divHead.appendChild(spanHead1)
  divHead.appendChild(spanHead2)

  const ul = document.getElementById('list')

  for ( let i=0; i<quant; i++) {
    const li = document.createElement('li')
    li.classList.add('cut')

    const divLi = document.createElement('div')
    divLi.classList.add('title')

    const strongLi = document.createElement('strong')
    strongLi.textContent = client.appointmentHistory[i].date

    const spanLi = document.createElement('span')
    spanLi.textContent = client.appointmentHistory[i].time

    const imgLi = document.createElement(`img`)
    imgLi.setAttribute("src", `src/assets/SealCheck.svg`)

    divLi.appendChild(strongLi)
    divLi.appendChild(spanLi)
    li.appendChild(divLi)
    li.appendChild(imgLi)
    ul.appendChild(li)
  }

}