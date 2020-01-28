const purgeCss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = (config) => {
  const postCssLoader = {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss-custom',
      plugins: () => [
        require('postcss-easy-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        ...config.mode === 'production' ? [purgeCss] : []
      ]
    }
  };

  config.module.rules
    .filter((r) => r.test.test('.css'))
    .forEach(r => r.use.splice(-1, 0, postCssLoader));

  return config
};
