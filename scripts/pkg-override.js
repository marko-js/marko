const fs = require("fs");
const path = require("path");
for (const name of [
  "compiler",
  "runtime-tags",
  "runtime-class",
  "runtime-class/translator",
  "compiler/internal/babel",
]) {
  overrideFile(path.join("packages", name, "package.json"));
}

function overrideFile(file) {
  const details = JSON.parse(fs.readFileSync(file, "utf8"));

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
