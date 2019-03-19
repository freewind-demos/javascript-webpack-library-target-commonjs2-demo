const libraryTarget = 'commonjs2';

module.exports = {
  mode: 'development',
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: `dist/bundle-${libraryTarget}.js`,
    libraryTarget: libraryTarget
  }
}
