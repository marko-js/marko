const fs = require("fs");
const path = require("path");
for (const name of fs.readdirSync("packages")) {
  const toggleFile = path.join("packages", name, "package.toggle.json");
  if (!fs.existsSync(toggleFile)) continue;

  const toggleData = readJSON(toggleFile);
  const targetFile = path.join("packages", name, "package.json");
  const targetData = readJSON(targetFile);
  for (const key in toggleData) {
    [targetData[key], toggleData[key]] = [toggleData[key], targetData[key]];
  }

  writeJSON(targetFile, targetData);
  writeJSON(toggleFile, toggleData);
}

function readJSON(filename) {
  return JSON.parse(fs.readFileSync(filename, "utf8"));
}

function writeJSON(filename, data) {
  fs.writeFileSync(filename, `${JSON.stringify(data, null, 2)}\n`);
}
