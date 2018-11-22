/**
 * 函数节流
 * 限定时间内只执行一次
 */
class Throttle {
    constructor(task = (_ => _), time = 0) {
        this.task = task
        this.time = time
        this.isLock = false
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
        if (this.isLock) return
        this.isLock = true
        setTimeout(() => {
            this.task()
            this.isLock = false
        }, this.time)
    }

}

export default Throttle