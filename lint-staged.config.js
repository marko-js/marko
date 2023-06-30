const escape = require("shell-quote").quote;

module.exports = {
  "*.{json,css,md}": escapeFileNames(["prettier --write", "git add"]),
  "*.js": escapeFileNames(["eslint", "prettier --write", "git add"]),
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
