import {apiConfig} from "./api-config.js"
import {pageClear} from "../services/page-clear.js"
import {userCard} from "../services/user-card.js"
import {userHistory} from "../services/user-history.js"

export async function clientLoad(clientId) {
  const response = await fetch(`${apiConfig.baseUrl}/clients`)
  const data = await response.json()
  let client = data.find(client => client.id === clientId)
  console.log(client.name)
  pageClear()
  userCard(client)
  userHistory(client)
  

}