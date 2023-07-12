// aliased as ~ts via package.json
require("@babel/register")({
  babelrc: false,
  configFile: false,
  extensions: [".ts"],
  presets: ["@babel/preset-typescript"],
  plugins: ["@babel/plugin-transform-modules-commonjs"],
});
