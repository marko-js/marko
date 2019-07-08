const fixtureDir = "test/components-pages/fixtures";

const exists = require("fs").existsSync;
const join = require("path").join;
const exec = require("child_process").execSync;
const fixtures = require("fs").readdirSync(fixtureDir);

fixtures.forEach(fixtureName => {
    const replacedName = fixtureName
        .replace(/widget/, "component")
        .replace(/Widget/, "Component");
    if (replacedName !== fixtureName) {
        const fixturePath = join(fixtureDir, fixtureName);
        const newPath = join(fixtureDir, replacedName);
        if (!exists(newPath)) {
            exec(`mv ${fixturePath} ${newPath}`);
        } else {
            exec(`mv ${fixturePath} ${newPath}2`);
        }
    }
});
