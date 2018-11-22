import Throttle from './../libs/throttle'

test('run limit', done => {
    let i = 0
    let j = 0
    let throttle = new Throttle()

    throttle.setTime(1000).setTask(() => {
        j = j + 100
        if (j === 300 && i === 3000) done()
    })

    setInterval(() => {
        i = i + 100
        throttle.run()
    }, 100)
});