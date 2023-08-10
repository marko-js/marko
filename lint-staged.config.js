const escape = require("shell-quote").quote;

module.exports = {
  "*.{json,css,md}": escapeFileNames([
    "prettier --write --with-node-modules",
    "git add",
  ]),
  "*.{js,ts}": escapeFileNames([
    "eslint --fix",
    "prettier --write --with-node-modules",
    "git add",
  ]),
};

function escapeFileNames(commands) {
  return (filenames) => {
    const allFiles = filenames.join(" ");
    const allFilesEscaped = filenames
      .map((filename) => `"${escape([filename]).replace(/\\@/g, "@")}"`)
      .join(" ");
    return commands.map(
      (command) =>
        `${command} ${command === "eslint" ? allFiles : allFilesEscaped}`
    );
  };
}
