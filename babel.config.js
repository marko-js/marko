module.exports = api => ({
  retainLines: true,
  presets: [
    [
      "@babel/env",
      {
        loose: true,
        targets: {
          node: "10"
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
  ],
  env: {
    test: {
      plugins: ["babel-plugin-istanbul"]
    }
  }
});
