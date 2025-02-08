export function cardStamp(client, quant){
  const spanTag = document.getElementById('tag')
  spanTag.textContent = (`ID: ${client.id}`)

  for(let i=0; i<quant; i++) {

   const divsItem = document.querySelectorAll('#slots .item');
   const divItem = divsItem[i]

   const imgItem = document.createElement('img')
   imgItem.setAttribute("src", 'src/assets/PinCheck.png')
   imgItem.setAttribute("alt", 'Corte feito')

   divItem.appendChild(imgItem)
  }
}