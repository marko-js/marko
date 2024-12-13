const { loadFileForTag } = require("@marko/compiler/babel-utils");

module.exports = (helloTag, t) => {
  const messageTag = helloTag.getNextSibling();
  helloTag.insertAfter(
    t.markoText(`${readFileText(helloTag)} ${readFileText(messageTag)}`),
  );
  helloTag.remove();
  messageTag.remove();
};

function readFileText(tag) {
  const file = loadFileForTag(tag);
  return file.path.get("body.0.value").node;
}
