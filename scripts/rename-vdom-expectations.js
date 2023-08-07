const fixtureDirs = [
  "test/render/fixtures",
  "test/render/fixtures-async",
  "test/render/fixtures-async-deprecated",
  "test/render/fixtures-deprecated",
];

const exists = require("fs").existsSync;
const join = require("path").join;
const exec = require("child_process").execSync;

fixtureDirs.forEach((fixtureDir) => {
  const fixtures = require("fs").readdirSync(fixtureDir);
  fixtures.forEach((fixtureName) => {
    const fixturePath = join(
      fixtureDir,
      fixtureName,
      "vdom-expected.generated.html"
    );
    if (exists(fixturePath)) {
      const newPath = fixturePath.replace(/\.generated/, "");
      exec(`mv ${fixturePath} ${newPath}`);
    }
  });
});
