import { ProxyState } from "../AppState.js"
import { Active } from "../Models/Active.js"
import { Wild } from "../Models/Wild.js"
import { pokeApi } from "./AxiosService.js"





class WildsService {
    async setActive(url) {
        let res = await pokeApi.get(url)
        ProxyState.active = new Active(res.data)
    }

    async getWilds() {
        let res = await pokeApi.get('pokemon/')
        ProxyState.wild = res.data.results.map(w => new Wild(w))
    }
}

export const wildsService = new WildsService()