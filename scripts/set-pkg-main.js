const fs = require("fs");
const path = require("path");
const target = `main:${process.argv[2]}`;
for (const name of fs.readdirSync("packages")) {
  const file = path.join("packages", name, "package.json");
  const details = JSON.parse(fs.readFileSync(file, "utf8"));
  if ((details.main = details[target])) {
    fs.writeFileSync(file, `${JSON.stringify(details, null, 2)}\n`);
  }
}
