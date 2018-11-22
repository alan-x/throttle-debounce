import Throttle from './../libs/throttle'

test('run limit', done => {
    let throttle = new Throttle(1000)
    let i = 0
    setInterval(() => {
        i = i + 100
        throttle.run(() => {
            console.log(i)
        })
    }, 100)
});