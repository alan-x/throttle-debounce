# throttle-debounce
函数节流和函数防抖

### Throttle api 说明
节流，让一个任务按照设定的时间间隔执行。
- `Throttle`:
    - `constructor(task: ?Function=(()=>{}), time: ?number=0)`：构造函数
       - 参数：
            - `task`：函数，要执行的任务
            - `time`：时间，任务的执行时间间隔
       - 返回值：`Throttle`
            
    - `setTask(task: Function): Throttle`：设置任务，为某个`Throttle`实例设置任务，将会覆盖构造函数中的任务
        - 参数：
            - `task`：函数，要执行的任务
        - 返回值：`Throttle`

    - `setTime(time: number): Throttle`：设置时间间隔，为某个`Throttle`实例设置时间间隔，将会覆盖构造函数中的时间间隔
        - 参数：
            - `time`：时间，任务的执行时间间隔
        - 返回值：`Throttle`
    - `run(task: ?Function=(this.task), time: ?number=this.time): void`：执行某个`Thottle`
        - 参数：
            - `task`：函数，要执行的任务，将会覆盖构造函数、`setTask`中的任务
            - `time`：时间，任务的执行时间间隔，将会覆盖构造函数、`setTime`中的时间间隔
        - 返回值：`void`
### Throttle 栗子
设置一个定时器，每`100ms`执行一次`throttle.run`，`throttle`设置的时间间隔是`1000ms`，所以任务每`1000ms`才会执行一次，但是期间`run`调用却有`10`次，达到了`节流`的目的
```$javascript
    let i = 0
    let throttle = new Throttle()
    throttle
        .setTime(1000)
        .setTask(() => {
            console.log(i)    
        })

    setInterval(() => {
        i = i + 100
        throttle.run()
    }, 100)
    // console
    // interval: t/100ms
    // throttle task: t/1000ms
    // 1000 2000 3000 4000 5000 ....
```
### Debounce api 说明
防抖，一个任务在时间间隔内不再触发才执行。
- `Debounce`:
    - `constructor(task: ?Function=(()=>{}), time: ?number=0)`：构造函数
       - 参数：
            - `task`：函数，要执行的任务
            - `time`：时间，触发时间间隔
       - 返回值：`Debounce`
            
    - `setTask(task: Function): Debounce`：设置任务，为某个`Debounce`实例设置任务，将会覆盖构造函数中的任务
        - 参数：
            - `task`：函数，要执行的任务
        - 返回值：`Debounce`

    - `setTime(time: number): Debounce`：设置触发时间间隔，为某个`Debounce`实例设置时间间隔，将会覆盖构造函数中的触发时间间隔
        - 参数：
            - `time`：时间，任务的执行触发时间间隔
        - 返回值：`Debounce`
    - `run(task: ?Function=(this.task), time: ?number=this.time): void`：触发某个`Debounce`
        - 参数：
            - `task`：函数，要执行的任务，将会覆盖构造函数、`setTask`中的任务
            - `time`：时间，任务的执行触发时间间隔，将会覆盖构造函数、`setTime`中的触发时间间隔
        - 返回值：`void`
### Debounce 栗子
定时器每`100ms`触发一次`run`，任务设定触发时间间隔是`1000ms`，所以定时器触发并不会导致任务执行，直到`1000ms`后定时器不再执行，再等`1000ms`，任务将执行，达到了`防抖`的目的。
```$javascript
        let i = 0
        let debounce = new Debounce()
        debounce
            .setTime(1000)
            .setTask(() => {
               console.log(i)
            })
        let interval = setInterval(() => {
            i = i + 100
            debounce.run()
            if (i === 1000) {
                clearInterval(interval)
            }
        }, 100)
    // console
    // interval: t/100ms
    // debounce task: t/1000ms
    // 1000
```