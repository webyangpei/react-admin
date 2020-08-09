const path = require('path');
module.exports = function override (config, env) {
  config = {
    entry: './src/index.js',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
  return config;
}