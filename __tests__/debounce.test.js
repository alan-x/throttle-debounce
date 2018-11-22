import Debounce from './../libs/debounce'

test('never run', done => {
    let debounce = new Debounce(2000)
    setInterval(() => {
        console.log(Date())
        debounce.run(()=>{
            console.log('here')
            done()
        })
    }, 1000)
});
test('run', done => {
    let debounce = new Debounce()
    setTimeout(() => {
        debounce.run(() => {
            console.log('here')
            done()
        }, 2000)
    }, 3000)
});