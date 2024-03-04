// aliased as ~ts via package.json
require("@babel/register")({
  babelrc: false,
  browserslistConfigFile: false,
  configFile: false,
  extensions: [".js", ".ts"],
  plugins: [
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-transform-export-namespace-from",
  ],
  presets: ["@babel/preset-typescript"],
});
