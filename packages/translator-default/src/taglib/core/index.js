import * as translateElse from "./conditional/translate-else";
import * as translateElseIf from "./conditional/translate-else-if";
import * as translateIf from "./conditional/translate-if";
import * as parseMacro from "./macro/parse";
import * as translateMacro from "./macro/translate";
import * as parseClass from "./parse-class";
import * as parseExport from "./parse-export";
import * as parseImport from "./parse-import";
import * as parseModuleCode from "./parse-module-code";
import * as parseStatic from "./parse-static";
import * as transformStyle from "./transform-style";
import * as translateAwait from "./translate-await";
import * as translateBody from "./translate-body";
import * as translateFor from "./translate-for";
import * as translateHTMLComment from "./translate-html-comment";
import * as translateIncludeContent from "./translate-include-content";
import * as translateServerOnly from "./translate-server-only";
import * as translateWhile from "./translate-while";

export default {
  "taglib-id": "marko-default-core",
  "<import>": {
    "node-factory": parseImport,
    "parse-options": {
      statement: true,
      rawOpenTag: true,
    },
    autocomplete: [
      {
        displayText: 'import <scope> from "<path>"',
        description:
          "Use to import external modules, follows the same syntax as JavaScript imports.",
        snippet: 'import ${2} from "${1:path}"',
        descriptionMoreURL:
          "https://markojs.com/docs/syntax/#importing-external-files",
      },
    ],
  },
  "<export>": {
    "node-factory": parseExport,
    "parse-options": {
      statement: true,
      rawOpenTag: true,
    },
    autocomplete: [
      {
        displayText: "export <scope>",
        description:
          "Use export additional data with the template, follows the same syntax as JavaScript exports.",
        snippet: "export ${1}",
        descriptionMoreURL:
          "https://markojs.com/docs/syntax/#importing-external-files",
      },
    ],
  },
  "<class>": {
    "node-factory": parseClass,
    "parse-options": {
      statement: true,
      rawOpenTag: true,
    },
    autocomplete: [
      {
        displayText: "class { /** lifecycle methods **/ }",
        snippet: "class {\n\t$0\n}",
        description:
          "A class containing the lifecycle methods, event handlers, and other properties for this component.",
        descriptionMoreURL:
          "https://markojs.com/docs/class-components/#single-file-components",
      },
    ],
  },
  "<static>": {
    "node-factory": parseStatic,
    "parse-options": {
      statement: true,
      rawOpenTag: true,
    },
    autocomplete: [
      {
        displayText: "static <statement>",
        description:
          "A JavaScript statement which is only evaluated once your template is loaded.",
        descriptionMoreURL:
          "https://markojs.com/docs/syntax/#static-javascript",
      },
    ],
  },
  "<style>": {
    transformer: transformStyle,
    "parse-options": {
      rawOpenTag: true,
    },
  },
  "<macro>": {
    "node-factory": parseMacro,
    "code-generator": translateMacro,
    "@name": {
      type: "string",
      autocomplete: [
        {
          description: "The name which can be used as a tag within a template.",
        },
      ],
    },
    autocomplete: [
      {
        displayText: 'macro|<params>| name="<name>"',
        description: "Creates a reusable fragment within the template.",
        snippet: 'macro|${2:param1, param2}| name="${1:name}"',
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#macro",
      },
    ],
  },
  "<include-text>": {
    "code-generator": translateIncludeContent,
    attributes: {},
    autocomplete: [
      {
        displayText: 'include-text("<path>")',
        description: "Allows you to inline the contents of a text file.",
        snippet: 'include-text(${1:"./foo.txt"})',
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#include-text",
      },
    ],
  },
  "<include-html>": {
    "code-generator": translateIncludeContent,
    attributes: {},
    autocomplete: [
      {
        displayText: 'include-html("<path>")',
        snippet: 'include-html(${1:"./foo.html"})',
        description: "Allows you to inline the contents of an html file.",
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#include-html",
      },
    ],
  },
  "<if>": {
    "parse-options": { controlFlow: true },
    "code-generator": translateIf,
    attributes: {},
    autocomplete: [
      {
        snippet: "if(${1:condition})",
        description: "Use to display content only if the condition is meant.",
        descriptionMoreURL:
          "https://markojs.com/docs/core-tags/#if-else-if-else",
      },
    ],
  },
  "<else-if>": {
    "parse-options": { controlFlow: true },
    "code-generator": translateElseIf,
    attributes: {},
    autocomplete: [
      {
        snippet: "else-if(${1:condition})",
        description:
          "Use after an <if> or <else-if> tag to display content if those conditions do not match and this one does.",
        descriptionMoreURL:
          "https://markojs.com/docs/core-tags/#if-else-if-else",
      },
    ],
  },
  "<else>": {
    "parse-options": { controlFlow: true },
    "code-generator": translateElse,
    attributes: {},
    autocomplete: [
      {
        description:
          "Use after an <if> or <else-if> tag to display content if those conditions do not match.",
        descriptionMoreURL:
          "https://markojs.com/docs/core-tags/#if-else-if-else",
      },
    ],
  },
  "<for>": {
    "parse-options": { controlFlow: true },
    "code-generator": translateFor,
    "@of": {
      type: "expression",
      autocomplete: [
        {
          description: "Iterates over a list of items.",
        },
      ],
    },
    "@in": {
      type: "expression",
      autocomplete: [
        {
          description: "Iterates over the keys and values of an object.",
        },
      ],
    },
    "@to": {
      type: "number",
      autocomplete: [
        {
          description: "Iterates up to the provided number (inclusive)",
        },
      ],
    },
    "@from": {
      type: "number",
      autocomplete: [
        {
          description: "Iterates starting from the provided number (inclusive)",
        },
      ],
    },
    "@step": {
      type: "number",
      autocomplete: [
        {
          description:
            "The amount to increment during each interation (with from/to)",
        },
      ],
    },
    autocomplete: [
      {
        snippet: "for|${1:value, index}| of=${3:array}",
        description:
          "Use to iterate over lists, object properties, or between ranges.",
        descriptionMoreURL:
          "https://markojs.com/docs/core-tags/#iterating-over-a-list",
      },
      {
        snippet: "for|${1:name, value}| in=${3:object}",
        descriptionMoreURL:
          "https://markojs.com/docs/core-tags/#iterating-over-an-objects-properties",
      },
      {
        snippet:
          "for|${1:index}| from=${2:number} to=${3:number} step=${4:number}",
        descriptionMoreURL:
          "https://markojs.com/docs/core-tags/#iterating-between-a-range-of-numbers",
      },
    ],
  },
  "<while>": {
    "parse-options": { controlFlow: true },
    "code-generator": translateWhile,
    autocomplete: [
      {
        snippet: "while(${1:condition})",
        description:
          "Renders the content multiple times until the condition is no longer met.",
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#while",
      },
    ],
  },
  "<html-comment>": {
    "code-generator": translateHTMLComment,
    "parse-options": {
      text: true,
    },
    attributes: {},
    autocomplete: [
      {
        description:
          "Use to create an html comment that is not stripped from the output.",
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#html-comment",
      },
    ],
  },
  "<_preserve>": {
    renderer: "marko/src/core-tags/components/preserve-tag.js",
    "@n": "boolean",
    "@i": "boolean",
    "@b": "boolean",
    autocomplete: [],
  },
  "<init-components>": {
    "code-generator": translateServerOnly,
    renderer: "marko/src/core-tags/components/init-components-tag.js",
    "@immediate": "boolean",
  },
  "<_preferred-script-location>": {
    "code-generator": translateServerOnly,
    renderer: "marko/src/core-tags/components/preferred-script-location-tag.js",
  },
  "<body>": {
    "code-generator": translateBody,
  },
  "<await>": {
    renderer: "marko/src/core-tags/core/await/renderer.js",
    types: "marko/src/core-tags/core/await/index.d.marko",
    "code-generator": translateAwait,
    "@_provider": "expression",
    "@_name": "string",
    "@name": {
      type: "string",
      autocomplete: [
        {
          description:
            "Used to improve debugging and also to ensure promise ordering with the show-after attribute.",
          snippet: 'name="${1:name}"',
        },
      ],
    },
    "@timeout": {
      type: "number",
      autocomplete: [
        {
          description:
            "An optional timeout that when reached will cause the promise to reject with a TimeoutError.",
        },
      ],
    },
    "@client-reorder": {
      type: "boolean",
      autocomplete: [
        {
          description:
            "If set anything after this promise will be sent out immediately, and reordered using JS in the browser.",
        },
      ],
    },
    "@show-after": {
      type: "string",
      autocomplete: [
        {
          description:
            "This attribute will ensure that (with client-reorder) this await tag will always show after another await tag with the provided name.",
        },
      ],
    },
    "@then <then>": {
      autocomplete: [
        {
          displayText: "then|<result>|",
          description: "Executed with the result of the resolved promise.",
          snippet: "then|${1:result}|",
          descriptionMoreURL: "https://markojs.com/docs/core-tags/#await",
        },
      ],
    },
    "@catch <catch>": {
      autocomplete: [
        {
          displayText: "catch|<err>|",
          description: "Executed with the err of the rejected promise.",
          snippet: "catch|${1:err}|",
          descriptionMoreURL: "https://markojs.com/docs/core-tags/#await",
        },
      ],
    },
    "@placeholder <placeholder>": {
      autocomplete: [
        {
          description: "A placeholder to display while the promise is pending.",
          descriptionMoreURL: "https://markojs.com/docs/core-tags/#await",
        },
      ],
    },
    autocomplete: [
      {
        displayText: "await(<promise>)",
        description:
          "Used to render a template asynchronously with the results of a Promise",
        snippet: "await(${1:promise})",
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#await",
      },
    ],
  },
  "<await-reorderer>": {
    "code-generator": translateServerOnly,
    renderer: "marko/src/core-tags/core/await/reorderer-renderer.js",
    autocomplete: [
      {
        snippet: "await-reorderer",
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#await",
      },
    ],
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
  "<*>": {
    "@key": {
      type: "string",
      "preserve-name": true,
      autocomplete: [
        {
          displayText: 'key="<method>"',
          snippet: 'key="${1:method}"',
          descriptionMoreURL: "https://markojs.com/docs/class-components/#key",
        },
        {
          descriptionMoreURL: "https://markojs.com/docs/class-components/#key",
        },
      ],
    },
    "@on*": {
      pattern: true,
      type: "statement",
      "allow-expressions": true,
      "preserve-name": true,
      "set-flag": "hasComponentEvents",
      autocomplete: [
        {
          displayText: 'on<event>("<method>")',
          snippet: 'on${1:Click}("handle${2:Button}${1:Click}")',
          descriptionMoreURL:
            "https://markojs.com/docs/components/#attaching-dom-event-listeners",
        },
      ],
    },
    "@once*": {
      pattern: true,
      type: "statement",
      "allow-expressions": true,
      "preserve-name": true,
      "set-flag": "hasComponentEvents",
      autocomplete: {
        displayText: 'once<event>("<method>")',
        snippet: 'once${1:Click}("handle${2:Button}${1:Click}")',
        descriptionMoreURL:
          "https://markojs.com/docs/components/#attaching-dom-event-listeners",
      },
    },
    "@no-update": {
      type: "flag",
      "preserve-name": true,
      autocomplete: [
        {
          descriptionMoreURL:
            "https://markojs.com/docs/class-components/#no-update",
        },
      ],
    },
    "@no-update-body": {
      type: "flag",
      "preserve-name": true,
      autocomplete: [
        {
          descriptionMoreURL:
            "https://markojs.com/docs/class-components/#no-update-body",
        },
      ],
    },
    "@no-update-if": {
      "preserve-name": true,
      autocomplete: [
        {
          snippet: "no-update-if(${1:condition})",
          descriptionMoreURL:
            "https://markojs.com/docs/class-components/#no-update-if",
        },
      ],
    },
    "@no-update-body-if": {
      "preserve-name": true,
      autocomplete: [
        {
          snippet: "no-update-body-if(${1:condition})",
          descriptionMoreURL:
            "https://markojs.com/docs/class-components/#no-update-body-if",
        },
      ],
    },
  },
};
