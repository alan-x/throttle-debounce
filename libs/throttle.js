/**
 * 函数节流
 * 限定时间内只执行一次
 */
class Throttle {
    constructor(time) {
        this.isLock = false
        this.time = time
        this.task = (_ => _)
    }

    run(task) {
        this.task = task
        if (this.isLock) return
        this.isLock = true
        setTimeout(() => {
            this.task()
            this.isLock = false
        }, this.time)

    }

}

export default Throttle