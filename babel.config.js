module.exports = {
  plugins: ["babel-plugin-inline-import"],
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
        ],
        "@babel/react",
      ],
      plugins: [
        "dynamic-import-node",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose" : true }],
        "@babel/transform-react-constant-elements",
        "@babel/transform-react-inline-elements",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        ["@babel/plugin-proposal-object-rest-spread", { useBuiltIns: true }],
      ],
      sourceMaps: true,
      retainLines: true,
    },
  },
};
