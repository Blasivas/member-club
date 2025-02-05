export function userCard(client){
  const divUser = document.getElementById('user')

  const divAvatar = document.createElement('div')
  divAvatar.classList.add('avatar')

  const imgPhoto = document.createElement('img')
  imgPhoto.classList.add('photo')
  imgPhoto.setAttribute("src", `src/assets/avatar/${client.name}.svg`)
  imgPhoto.setAttribute("alt", 'foto de perfil')

  const divInfo = document.createElement('div')
  divInfo.classList.add('info')

  const strongInfo = document.createElement('strong')
  strongInfo.textContent = client.name

  const spanPai = document.createElement('span')
  spanPai.textContent = 'Cliente desde ' 

  const spanFilho = document.createElement('span')
  spanFilho.textContent = client.clientSince 


  divAvatar.appendChild(imgPhoto)

  spanPai.appendChild(spanFilho)
  divInfo.appendChild(strongInfo)
  divInfo.appendChild(spanPai)

  divUser.appendChild(divAvatar)
  divUser.appendChild(divInfo)
}