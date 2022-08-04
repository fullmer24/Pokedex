import { ProxyState } from "../AppState.js";
import { Caught } from "../Models/Caught.js";
import { caughtsApi } from "./AxiosService.js";



class CaughtsService {
    async release(id) {
        await caughtsApi.delete(`/pokemon${id}`)
        ProxyState.caught = ProxyState.caught.filter(c => c.id != id)
    }

    async getCaught() {
        let res = await caughtsApi.get('/pokemon')
        ProxyState.caught = res.data.map(c => new Caught(c))
    }

    async catch() {
        if (ProxyState.caught.find(c => c.name == ProxyState.active.name)) {
            throw new Error('You already own this Pokemon')
        }

        let res = await caughtsApi.post('/pokemon', ProxyState.active)
        let newCatch = new Caught(res.data)
        ProxyState.caught = [...ProxyState.caught, newCatch]
    }
}


export const caughtsService = new CaughtsService()