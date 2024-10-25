module.exports = function override(config, env) {
  const svgRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test(".svg")
  );
  if (svgRule) {
    svgRule.use = [
      {
        loader: "@svgr/webpack",
        options: {
          throwIfNamespace: false,
        },
      },
      "file-loader", // Optional
    ];
  }
  return config;
};
