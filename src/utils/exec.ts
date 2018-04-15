class Exec {
    public executed: boolean
    constructor() {
        this.executed = false
    }

    public on = (): any => (this.executed = true)
    public is = (): boolean => this.executed
}

export const exec: any = new Exec()
