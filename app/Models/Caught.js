import { Active } from "./Active.js";




export class Caught extends Active {
    constructor(data) {
        super(data)
        this.id = data.id
    }

    get ListTemplate() {
        return `
    <div class="text-light d-flex align-items-center justify-content-between">
        <div class="mb-0">
            <b>${this.name}</b>           
        </div>
        <div>
            <button class="btn text-light selectable" onclick="app.caughtController.release('${this.id}')">
                <i class="mdi mdi-delete-forever"></i>
            </button>
        </div>
    </div>
    `
    }

}



{/* <input type="checkbox" ${this.banana ? 'checked' : ''} onchange="app.caughtController.toggleCaught('${this.id}')"> */ }