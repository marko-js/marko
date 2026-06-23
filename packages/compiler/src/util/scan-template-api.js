// Core tags that are only available in the Class API.
const CLASS_API_TAGS = new Set([
  "await-reorderer",
  "class",
  "include-html",
  "include-text",
  "init-components",
  "macro",
  "module-code",
  "while",
]);

// Core tags that are only available in the Tags API.
const TAGS_API_TAGS = new Set([
  "const",
  "debug",
  "define",
  "id",
  "let",
  "lifecycle",
  "log",
  "return",
  "try",
]);

const STYLE_BLOCK_REG = /^style(?:(?:\.[^.\s\\/:*?"<>|({]+)+)?\s*\{/;

/**
 * Scans a parsed Marko program body for the first feature that is exclusive to
 * either the Tags API or the Class API, returning `"tags"`, `"class"`, or
 * `undefined` when the body contains nothing API-specific.
 *
 * This mirrors the feature detection the interop translator performs while
 * compiling, but operates on the raw parsed AST so it never needs to run the
 * (more expensive) transform/translate phases.
 */
export default function scanTemplateApi(body) {
  if (body) {
    for (const child of body) {
      const api = scanChild(child);
      if (api) return api;
    }
  }
}

function scanChild(node) {
  switch (node.type) {
    case "MarkoScriptlet":
      // Dynamic (non-static) scriptlets are a Class API feature.
      return node.static ? undefined : "class";
    case "MarkoClass":
      return "class";
    case "MarkoComment":
      if (/^\s*use tags\s*$/.test(node.value)) return "tags";
      if (/^\s*use class\s*$/.test(node.value)) return "class";
      return undefined;
    case "MarkoTag":
      return scanTag(node);
  }
}

function scanTag(node) {
  // A tag variable (e.g. `<my-tag/foo>`) is a Tags API feature.
  if (node.var) return "tags";

  const name =
    node.name?.type === "StringLiteral" ? node.name.value : undefined;
  if (name === "style") {
    // A `style { ... }` block (as opposed to a `<style>` element) is Class API.
    if (STYLE_BLOCK_REG.test(node.rawValue || "")) return "class";
  } else if (name !== undefined) {
    if (CLASS_API_TAGS.has(name)) return "class";
    if (TAGS_API_TAGS.has(name)) return "tags";
  }

  // Raw tags (e.g. `style`/`script`/`html-comment`) expose their inner source
  // via `rawValue` and have no meaningful parsed attributes, so skip them.
  if (node.rawValue == null && node.attributes) {
    for (const attr of node.attributes) {
      if (attr.type === "MarkoAttribute") {
        if (attr.arguments?.length) return "class"; // attribute arguments
        if (attr.bound) return "tags"; // two-way bound attribute
      }
    }
  }

  return (
    scanTemplateApi(node.body?.body) || scanTemplateApi(node.attributeTags)
  );
}
