import { addressService } from "../services/addressService.js";

export const addressController = {
  async getAddressByCEP(req, res) {
    const { cep } = req.params;

    const address = await addressService.getAddressByCEP(cep)

    res.send(address)
  }
}