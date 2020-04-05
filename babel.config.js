module.exports = {
  env: {
    "server-dev": {
      presets: [
        [
          "@babel/env",
          {
            loose: true,
            modules: "commonjs",
            targets: {
              node: "current",
            },
          },
        ],
        [
          "@babel/typescript",
        ]
      ],
      sourceMaps: true,
      retainLines: true,
    },
  },
};
