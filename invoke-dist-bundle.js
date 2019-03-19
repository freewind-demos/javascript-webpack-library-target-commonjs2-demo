const bundle = require('./dist/bundle-commonjs2');

console.log(Object.keys(bundle))

bundle.hello('webpack');
