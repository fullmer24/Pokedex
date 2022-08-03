import { ProxyState } from "../AppState.js";
import { wildsService } from "../Services/WildsService.js";
import { Pop } from "../Utils/Pop.js"



function _drawWild() {
    let template = ''
    ProxyState.wild.forEach(w => template += w.Template)
    // @ts-ignore
    document.getElementById('wild').innerHTML = template
}




export class WildsController {
    constructor() {
        ProxyState.on('wild', _drawWild)
        this.getWilds()
    }

    async getWilds() {
        try {
            await wildsService.getWilds()
        } catch (error) {
            console.error('[Getting Wilds]', error);
            Pop.error(error)
        }
    }

    async setActive(url) {
        try {
            await wildsService.setActive(url)
        } catch (error) {
            console.error('[set Active]', error);
            Pop.error(error)
        }
    }

}