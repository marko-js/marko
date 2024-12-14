module.exports = (api) => ({
  retainLines: true,
  presets: [
    [
      "@babel/env",
      {
        loose: true,
        targets: {
          node: "18",
        },
      },
    ],
  ],
  plugins: ["@babel/transform-runtime"],
  overrides: [
    {
      test: "./packages/runtime-class/src/**/*",
      plugins: api.env("production")
        ? [
            ["babel-plugin-minprops", { matchPrefix: "___", context: "marko" }],
            "./scripts/babel-plugin-marko-debug",
          ]
        : [],
    },
  ],
});
