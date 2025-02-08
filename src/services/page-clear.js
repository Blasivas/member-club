export function pageClear() {
  const divUser = document.getElementById('user')
  divUser.innerHTML = "";

  const divHistoryHead = document.getElementById('history-head')
  divHistoryHead.innerHTML = "";

  const ulList = document.getElementById('list')
  ulList.innerHTML = "";

  const spanTag = document.getElementById('tag')
  spanTag.textContent = ("ID: ")

  const divsItem = document.querySelectorAll('#slots .item')

  for (let i=0; i<10; i++) {
    const divItem = divsItem[i]
    divItem.innerHTML=''
  }

  const divText = document.getElementById('text')
  divText.innerHTML = ''
  const divLinear = document.getElementById('linear')
  const spanLinear = divLinear.querySelector('.remove')
  if (spanLinear) {
    spanLinear.remove();
  }

  const divBar = document.getElementById('bar')
  divBar.style.width = `.25rem`
}