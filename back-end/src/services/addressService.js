const CEP_API_URL = "https://ws.apicep.com/cep.json?code="

export const addressService = {
  async getAddressByCEP(cep) {

    const result = await fetch(`${CEP_API_URL}${cep}`).then(res => res.json())
    
    console.log(result)
   
    return result
  }
}