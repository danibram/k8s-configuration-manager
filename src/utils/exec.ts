class Exec {
    public executed: boolean
    constructor () {
        this.executed = false
    }

    on = (): any => this.executed = true
    is = (): boolean => this.executed
}

export const exec: any = new Exec()
