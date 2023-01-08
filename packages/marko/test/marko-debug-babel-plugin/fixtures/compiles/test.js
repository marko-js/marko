const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const pluginPath = require.resolve(
  "../../../../../../scripts/babel-plugin-marko-debug"
);

exports.check = function (expect, helpers, done) {
  const input = fs.readFileSync(path.join(__dirname, "input.js"), "utf-8");
  const actual = babel.transform(input, {
    plugins: [pluginPath],
    babelrc: false,
    configFile: false
  }).code;

  if (process.env.UPDATE_EXPECTATIONS) {
    fs.writeFileSync(path.join(__dirname, "expected.js"), actual);
  } else {
    const expected = fs
      .readFileSync(path.join(__dirname, "expected.js"), "utf-8")
      .trim();

    expect(expected).to.equal(actual);
  }

  done();
};
