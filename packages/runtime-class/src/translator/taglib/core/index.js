import * as translateElse from "./conditional/translate-else";
import * as translateElseIf from "./conditional/translate-else-if";
import * as translateIf from "./conditional/translate-if";
import * as parseMacro from "./macro/parse";
import * as translateMacro from "./macro/translate";
import migrate from "./migrate";
import * as parseClass from "./parse-class";
import * as parseClient from "./parse-client";
import * as parseExport from "./parse-export";
import * as parseImport from "./parse-import";
import * as parseModuleCode from "./parse-module-code";
import * as parseServer from "./parse-server";
import * as parseStatic from "./parse-static";
import * as transformStyle from "./transform-style";
import * as translateAwait from "./translate-await";
import * as translateFor from "./translate-for";
import * as translateHTMLComment from "./translate-html-comment";
import * as translateIncludeContent from "./translate-include-content";
import * as translateServerOnly from "./translate-server-only";
import * as translateWhile from "./translate-while";

export default {
  taglibId: "marko-core",
  migrate,
  "<import>": {
    "node-factory": parseImport,
    "parse-options": {
      statement: true,
      rawOpenTag: true,
    },
  },
  "<export>": {
    "node-factory": parseExport,
    "parse-options": {
      statement: true,
      rawOpenTag: true,
    },
  },
  "<client>": {
    "node-factory": parseClient,
    "parse-options": {
      statement: true,
      rawOpenTag: true,
    },
  },
  "<server>": {
    "node-factory": parseServer,
    "parse-options": {
      statement: true,
      rawOpenTag: true,
    },
  },
  "<class>": {
    "node-factory": parseClass,
    "parse-options": {
      statement: true,
      rawOpenTag: true,
    },
  },
  "<static>": {
    "node-factory": parseStatic,
    "parse-options": {
      statement: true,
      rawOpenTag: true,
    },
  },
  "<style>": {
    transformer: transformStyle,
    "parse-options": {
      text: true,
      rawOpenTag: true,
      preserveWhitespace: true,
    },
  },
  "<macro>": {
    "node-factory": parseMacro,
    "code-generator": translateMacro,
  },
  "<include-text>": {
    "code-generator": translateIncludeContent,
  },
  "<include-html>": {
    "code-generator": translateIncludeContent,
  },
  "<if>": {
    "parse-options": { controlFlow: true },
    "code-generator": translateIf,
  },
  "<else-if>": {
    "parse-options": { controlFlow: true },
    "code-generator": translateElseIf,
  },
  "<else>": {
    "parse-options": { controlFlow: true },
    "code-generator": translateElse,
  },
  "<for>": {
    "parse-options": { controlFlow: true },
    "code-generator": translateFor,
  },
  "<while>": {
    "parse-options": { controlFlow: true },
    "code-generator": translateWhile,
  },
  "<html-comment>": {
    "code-generator": translateHTMLComment,
    "parse-options": {
      text: true,
    },
  },
  "<_preserve>": {
    renderer: "marko/src/core-tags/components/preserve-tag.js",
  },
  "<init-components>": {
    "code-generator": translateServerOnly,
    renderer: "marko/src/core-tags/components/init-components-tag.js",
  },
  "<_preferred-script-location>": {
    "code-generator": translateServerOnly,
    renderer: "marko/src/core-tags/components/preferred-script-location-tag.js",
  },
  "<await>": {
    renderer: "marko/src/core-tags/core/await/renderer.js",
    types: "marko/src/core-tags/core/await/index.d.marko",
    "code-generator": translateAwait,
  },
  "<await-reorderer>": {
    "code-generator": translateServerOnly,
    renderer: "marko/src/core-tags/core/await/reorderer-renderer.js",
  },
  "<__flush_here_and_after__>": {
    "code-generator": translateServerOnly,
    renderer: "marko/src/core-tags/core/__flush_here_and_after__.js",
  },
  "<module-code>": {
    "node-factory": parseModuleCode,
    "parse-options": {
      rawOpenTag: true,
    },
  },
  "<script>": {
    types: "marko/src/core-tags/core/script.d.marko",
  },
};
