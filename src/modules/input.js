const cardId = document.getElementById('card-id')
const form = document.querySelector("form")

import {clientLoad} from "../services/client-load"

cardId.oninput = () => {
  let valor = cardId.value.replace(/\D/g, ''); 
  let valorFormatado = valor.match(/.{1,3}/g)?.join('-') || '';
  cardId.value = valorFormatado;
}

form.onsubmit = async (event) => {
  event.preventDefault();
  const finalId = cardId.value
  console.log(finalId)
  clientLoad(finalId)
}