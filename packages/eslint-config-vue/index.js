module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'vue/html-indent': [ 'error', 2 ],
    'vue/component-tags-order': [ 'error', { order: [ 'script', 'template', 'style' ] } ],
    'vue/html-quotes': [ 'error', 'single', { avoidEscape: true } ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'any',
          component: 'any',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
}
