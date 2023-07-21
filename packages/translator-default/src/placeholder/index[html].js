import { types as t } from "@marko/compiler";
import { getTagDef, importNamed, importDefault } from "@marko/babel-utils";
import toString from "marko/src/runtime/helpers/to-string";
import { x as escapeXML } from "marko/src/runtime/html/helpers/escape-xml";
import escapeScript from "marko/src/runtime/html/helpers/escape-script-placeholder";
import escapeStyle from "marko/src/runtime/html/helpers/escape-style-placeholder";
import write from "../util/html-out-write";
import withPreviousLocation from "../util/with-previous-location";

const ESCAPE_TYPES = {
  html: {
    name: "x",
    module: "marko/src/runtime/html/helpers/escape-xml.js",
    alias: "marko_escapeXml",
    fn: escapeXML,
  },
  script: {
    module: "marko/src/runtime/html/helpers/escape-script-placeholder.js",
    alias: "marko_escapeScript",
    fn: escapeScript,
  },
  style: {
    module: "marko/src/runtime/html/helpers/escape-style-placeholder.js",
    alias: "marko_escapeStyle",
    fn: escapeStyle,
  },
};

export default function (path) {
  const {
    node,
    hub: { file },
  } = path;
  const { confident, value: computed } = path.get("value").evaluate();
  let { escape, value } = node;

  if (escape) {
    const tagName = findParentTagName(path);
    const escapeType = ESCAPE_TYPES[tagName] || ESCAPE_TYPES.html;

    value = confident
      ? t.stringLiteral(escapeType.fn(computed))
      : t.callExpression(
          escapeType.name
            ? importNamed(
                file,
                escapeType.module,
                escapeType.name,
                escapeType.alias
              )
            : importDefault(file, escapeType.module, escapeType.alias),
          [value]
        );
  } else {
    value = confident
      ? t.stringLiteral(toString(computed))
      : t.callExpression(
          importDefault(
            file,
            "marko/src/runtime/helpers/to-string.js",
            "marko_to_string"
          ),
          [value]
        );
  }

  const replacement = write`${value}`;

  if (replacement) {
    path.replaceWith(withPreviousLocation(replacement, node));
  } else {
    path.remove();
  }
}

function findParentTagName(path) {
  while ((path = path.parentPath)) {
    if (path.isProgram()) {
      return;
    }

    if (path.isMarkoTag()) {
      const tagDef = getTagDef(path);
      return tagDef && tagDef.html && path.get("name.value").node;
    }
  }
}
