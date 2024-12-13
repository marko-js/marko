const fs = require("fs");
const path = require("path");
for (const name of fs.readdirSync("packages")) {
  overrideFile(path.join("packages", name, "package.json"));
  overrideFile(path.join("packages", name, "translator/package.json"));
}

function overrideFile(file) {
  let details;
  try {
    details = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return;
  }

  if (
    [
      overrideField(details, "main"),
      overrideField(details, "module"),
      overrideField(details, "browser"),
      overrideField(details, "exports"),
    ].some(Boolean)
  ) {
    fs.writeFileSync(file, `${JSON.stringify(details, null, 2)}\n`);
  }
}

function overrideField(details, field) {
  const overrideField = `${field}:override`;
  const currentValue = details[field];
  const overrideValue = details[overrideField];
  if (overrideValue) {
    details[field] = overrideValue;
    details[overrideField] = currentValue;
    return true;
  }

  return false;
}
