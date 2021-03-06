/* eslint-disable one-var */
/* eslint-disable no-undef */
/* eslint-disable sort-keys */

const path = require('path');
const JSExport = path.join(__dirname, 'static', 'scripts')

module.exports = {
    'entry': {
        'share': "./resources/js/share.js",
        'tags': "./resources/js/tags.js"
    },
    'output': {
        'filename': "[name].bundle.js",
        'path': JSExport
    },
    'module': {
        'loaders': [{
            'exclude': /node_modules/,
            'loader': 'babel-loader',
            'test': /\.js$/
        },
        {
            'exclude': /node_modules/,
            'loader': ['babel-loader', 'eslint-loader'],
            'test': /\.jsx$/
        }]
    }
}
