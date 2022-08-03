export class Wild {
    constructor({ name, weight, url }) {
        this.name = name
        this.weight = weight
        this.url = url
    }

    get Template() {
        return `
<div class="selectable no-select p-2 text-white border border-light m-2 rounded" onclick="app.activeController.setActive('${this.url}')">
    <p class="mb-0"><b>${this.name}</b></p>
</div>
    `}


}