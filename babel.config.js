module.exports = api => ({
  retainLines: true,
  presets: [
    [
      "@babel/env",
      {
        loose: true,
        targets: {
          node: "8"
        }
      }
    ]
  ],
  plugins: [
    "@babel/transform-runtime",
    "@babel/plugin-proposal-object-rest-spread"
  ],
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
