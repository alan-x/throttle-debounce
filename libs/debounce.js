class Debounce {
    constructor(time) {
        this.time = time
    }

    run(func) {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
            func()
        }, this.time)
    }
}

export default Debounce