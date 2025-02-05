import {clients} from "../../server.json"
import {clientLoad} from "../services/client-load.js"

const form = document.querySelector("form")
const clientId = document.getElementById("card-id")
let stringId = clientId.value.toString()
let finalId = stringId.replace(/(\d{3})(?=\d)/g, '$1-')


form.onsubmit = async (event) => {
  event.preventDefault()
  console.log(stringId)
  console.log(finalId)
  // clientLoad(finalId)
}