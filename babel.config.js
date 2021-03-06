module.exports = (api) => {
  api.cache(true);

  return {
    presets: [['@babel/preset-env', { targets: { node: '10' } }]],
    plugins: ['@babel/plugin-syntax-optional-chaining', 'lodash'],
  };
};
