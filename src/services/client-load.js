import {apiConfig} from "./api-config.js"
import {pageClear} from "../services/page-clear.js"

import {userCard} from "../services/user-card.js"
import {userHistory} from "../services/user-history.js"
import {cardStamp} from "../services/card-stamp.js"
import {cardProgress} from "../services/card-progress.js"


export async function clientLoad(clientId) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/clients`)
    const data = await response.json()
    let client = data.find(client => client.id === clientId)
    const quant = client.loyaltyCard.totalCuts  
    pageClear()
    userCard(client)
    userHistory(client, quant)
    cardStamp(client, quant)
    cardProgress(client, quant)
    if (quant==10){
      alert('Parabéns! Seu próximo corte é gratuito!')
    }
  } catch (error) {
    alert('ID digitado é invalido')
    console.log(error)
  }

}