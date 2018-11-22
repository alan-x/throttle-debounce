import Debounce from './../libs/debounce'

test('never run', done => {
    let debounce = new Debounce()
    debounce
        .setTime(1000)
        .setTask(() => {
            console.log(Date())
        })
    setInterval(() => {
        debounce.run()
    }, 1000)
});
test('run', done => {

    let i = 0
    let debounce = new Debounce()
    debounce
        .setTime(1000)
        .setTask(() => {
            if (i === 1000) {
                done()
            }
        })
    let interval = setInterval(() => {
        i = i + 100
        debounce.run()
        if (i === 1000) {
            clearInterval(interval)
        }
    }, 100)
});