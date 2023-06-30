module.exports = api => ({
  retainLines: true,
  presets: [
    [
      "@babel/env",
      {
        loose: true,
        targets: {
          node: "16"
        }
      }
    ]
  ],
  plugins: ["@babel/transform-runtime"],
  overrides: [
    {
      test: "./packages/marko/src/**/*",
      plugins: api.env("production")
        ? [
            ["babel-plugin-minprops", { matchPrefix: "___", context: "marko" }],
            "./scripts/babel-plugin-marko-debug"
          ]
        : []
    }
  ]
});
