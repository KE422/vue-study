const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  experiments: {
    topLevelAwait: true
  },
  transpileDependencies: true
})
