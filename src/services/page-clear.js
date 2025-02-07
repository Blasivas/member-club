export function pageClear() {
  const divUser = document.getElementById('user')
  divUser.innerHTML = "";

  const divHistoryHead = document.getElementById('history-head')
  divHistoryHead.innerHTML = "";

  const ulList = document.getElementById('list')
  ulList.innerHTML = "";

}