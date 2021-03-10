const path = require('path');
const webpack = require('webpack');
module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/')
      }
    }, 
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ]
  },
  // chainWebpack: config => {
   
  // },
  "transpileDependencies": [
    "vuetify"
  ],
  "pluginOptions": {
    "i18n": {
      "locale": "ru",
      "fallbackLocale": "ru",
      "localeDir": "locales",
      "enableInSFC": false
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    
  },
}
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/_variables.scss'),
      ],
    })
}