const path = require('path')

module.exports = {
    entry: {
        Throttle: path.resolve(__dirname, 'libs/throttle'),
        Debounce: path.resolve(__dirname, 'libs/debounce')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        globalObject: 'this',
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: '[name]'
    }
}