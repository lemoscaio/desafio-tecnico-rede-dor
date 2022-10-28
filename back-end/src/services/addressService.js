import axios from "axios"

const CEP_API_URL = "https://ws.apicep.com/cep.json?code="

export const addressService = {
  async getAddressByCEP(cep) {

    const {data} = await axios.get(`${CEP_API_URL}${cep}`)
   
    return data
  }
}