const form = document.querySelector("form")

form.onsubmit = (event) => {
  event.preventDefault()
  console.log("Funcionando")
}