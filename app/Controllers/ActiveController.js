import { ProxyState } from "../AppState.js";

function _drawActive() {
    if (!ProxyState.active) {
        return
    }
    // @ts-ignore
    document.getElementById('active').innerHTML = ProxyState.active.ActiveTemplate
}

export class ActiveController {
    constructor() {
        ProxyState.on('active', _drawActive)
    }
}