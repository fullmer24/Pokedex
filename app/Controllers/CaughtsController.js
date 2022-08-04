import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"



function _drawCaught() {
    let template = ''
    ProxyState.caught.forEach(c => template += c.ListTemplate)
    // @ts-ignore
    document.getElementById('caught').innerHTML = template
    // @ts-ignore
    document.getElementById('owned').innerHTML = `
    <div class="text-light">
        <div class="d-flex justify-content-between">
            <div>
                <b>OWNED:</b> ${ProxyState.caught.length}
            </div>
        </div>
    </div>                
`




}


export class CaughtsController {
    constructor() {
        ProxyState.on('caught', _drawCaught)
        this.getCaught()
    }

    async getCaught() {
        try {
            // @ts-ignore
            await caughtsService.getCaught()
        } catch (error) {
            console.error('[adding caught]', error);
            Pop.error(error)
        }
    }

    async release(id) {
        try {
            const yes = await Pop.confirm('Release')
            if (!yes) { return }
            // @ts-ignore
            await caughtsService.release(id)
        } catch (error) {
            console.error('[release]', error);
            Pop.error(error)
        }
    }


}




// add toggle