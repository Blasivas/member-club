import {apiConfig} from "./api-config.js"
// import {clients} from "../../server.json"

export async function clientLoad(clientId) {
  const response = await fetch(`${apiConfig.baseUrl}/clients`);
  const data = await response.json();
  let search = data.find(client => client.id === clientId);
  console.log(search.name);
}