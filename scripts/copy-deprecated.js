const fixtureDir = "test/components-browser/fixtures";
const deprecatedDir = fixtureDir + "-deprecated";
const already = [];
let action = process.argv[2];

if (action !== "cp" && action !== "mv") {
    throw new Error(
        `Invalid action. Example: node ${__filename.replace(
            process.cwd() + "/",
            ""
        )} cp`
    );
}

if (action === "cp") {
    action = "cp -R";
}

const fixtures = [
    "destroy-multiple-root-els",
    "diffpatch-rearrange-keyed-components",
    "diffpatch-rearrange-keyed-els",
    "ref-nested-component-multiple-root-els",
    "sanity-check-multiple-root-els"
].filter(x => already.indexOf(x) === -1);

const exists = require("fs").existsSync;
const mkdir = require("fs").mkdirSync;
const join = require("path").join;
const exec = require("child_process").execSync;

if (!exists(deprecatedDir)) {
    mkdir(deprecatedDir);
}

fixtures.forEach(fixtureName => {
    const fixturePath = join(fixtureDir, fixtureName);
    const deprecatedPath = join(
        deprecatedDir,
        fixtureName.replace(/widget/, "component").replace(/\d$/, "")
    );
    let targetName = deprecatedPath;
    let count = 1;
    while (exists(targetName)) {
        targetName = deprecatedPath + ++count;
    }
    exec(`${action} ${fixturePath} ${targetName}`);
});
