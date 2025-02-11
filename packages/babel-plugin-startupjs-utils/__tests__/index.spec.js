const pluginTester = require('babel-plugin-tester').default
const plugin = require('../index')
const { name: pluginName } = require('../package.json')

pluginTester({
  plugin,
  pluginName,
  snapshot: true,
  babelOptions: {
    plugins: ['@babel/plugin-syntax-jsx']
  },
  pluginOptions: {},
  tests: {
    'Use default cache value if nothing is set in options': /* js */`
      import cacheEnabled from '@startupjs/cache/enabled'
      import { __increment, __decrement } from '@startupjs/debug'

      export const CACHE_ACTIVE = { value: cacheEnabled }
    `
  }
})

pluginTester({
  plugin,
  pluginName,
  snapshot: true,
  babelOptions: {
    plugins: ['@babel/plugin-syntax-jsx']
  },
  pluginOptions: {
    observerCache: true
  },
  tests: {
    'Get cache value from options': /* js */`
      import cacheEnabled from '@startupjs/cache/enabled'
      import { __increment, __decrement } from '@startupjs/debug'

      export const CACHE_ACTIVE = { value: cacheEnabled }
    `
  }
})
