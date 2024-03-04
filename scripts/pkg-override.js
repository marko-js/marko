const fs = require("fs");
const path = require("path");
for (const name of fs.readdirSync("packages")) {
  const file = path.join("packages", name, "package.json");
  const details = JSON.parse(fs.readFileSync(file, "utf8"));

  if (
    [
      override(details, "main"),
      override(details, "module"),
      override(details, "browser"),
      override(details, "exports"),
    ].some(Boolean)
  ) {
    fs.writeFileSync(file, `${JSON.stringify(details, null, 2)}\n`);
  }
}

function override(details, field) {
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
