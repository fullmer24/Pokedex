export class Active {
    constructor(data) {
        this.name = data.form.name
        this.url = data.form.url
        this.height = data.height
        this.moves = data.moves.move
        this.stat = data.stats.stat
    }

    get ActiveTemplate() {
        return `
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <h3>${this.name}</h3>
                </div>
                <div class="card-text">
                    <p>
                    <b>Moves: ${this.moves} | Height: ${this.height} | Stat: ${this.stat}</b>
                    </p>            
                </div>
            </div>
            <div class="card-footer">
                <div class="text-end">
                    <button onclick="app.caughtController.addCaught()" class="btn btn-dark">Catch</button>
                </div>
            </div>
        </div>
        `
    }

}