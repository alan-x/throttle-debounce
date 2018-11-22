class Debounce {
    constructor(task = (_ => _), time = 0) {
        this.task = task
        this.time = time
    }

    setTask(task) {
        if (typeof task !== 'function') throw 'error: task should be a function'
        this.task = task
        return this
    }

    setTime(time) {
        this.time = time
        return this
    }

    run(task = this.task, time = this.time) {
        this.setTask(task)
        this.setTime(time)
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
            this.task()
        }, this.time)
    }
}

export default Debounce