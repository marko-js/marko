import parseImport from "./parse-import";
import translateAttrs from "./translate-attrs";
import translateIf from "./condition/translate-if";
import translateElseIf from "./condition/translate-else-if";
import translateElse from "./condition/translate-else";
import translateConst from "./translate-const";
import translateFor from "./translate-for";
import translateGet from "./translate-get";
import translateHTMLComment from "./translate-html-comment";
import translateLet from "./translate-let";
import translateSet from "./translate-set";
import translateStyle from "./translate-style";
import translateTag from "./translate-tag";
import translateYield from "./translate-yield";
import { taglibId } from "../util/is-core-tag";

export default {
  taglibId,
  "<import>": {
    parse: parseImport,
    parseOptions: {
      rootOnly: true,
      rawOpenTag: true,
      openTagOnly: true,
      ignoreAttributes: true,
      relaxRequireCommas: true,
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
  "<attrs>": {
    translate: translateAttrs,
    attributes: {},
    autocomplete: [
      {
        displayText: "attrs/{ ... }",
        description: "Use to receive the attributes passed into this template.",
        snippet: "attrs/{ $1 }$2",
      },
    ],
  },
  "<if>": {
    translate: translateIf,
    attributes: {},
    autocomplete: [
      {
        snippet: "if=${1:condition}",
        description: "Use to display content only if the condition is met.",
        descriptionMoreURL:
          "https://markojs.com/docs/core-tags/#if-else-if-else",
      },
    ],
  },
  "<else-if>": {
    translate: translateElseIf,
    attributes: {},
    autocomplete: [
      {
        snippet: "else-if=${1:condition}",
        description:
          "Use after an <if> or <else-if> tag to display content if those conditions do not match and this one does.",
        descriptionMoreURL:
          "https://markojs.com/docs/core-tags/#if-else-if-else",
      },
    ],
  },
  "<else>": {
    translate: translateElse,
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
    translate: translateFor,
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
  "<let>": {
    translate: translateLet,
    attributes: {},
    autocomplete: [
      {
        description: "Use to create an mutable binding.",
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#let",
      },
    ],
  },
  "<const>": {
    translate: translateConst,
    attributes: {},
    autocomplete: [
      {
        description: "Use to create an constant binding.",
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#const",
      },
    ],
  },
  "<html-comment>": {
    translate: translateHTMLComment,
    parseOptions: {
      state: "parsed-text",
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
  "<tag>": {
    translate: translateTag,
    attributes: {},
    autocomplete: [
      {
        displayText: "tag/<name>|<params>|",
        description: "Creates a reusable fragment within the template.",
        snippet: "tag/${1:name}|${2:param1, param2}|",
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#tag",
      },
    ],
  },
  "<set>": {
    translate: translateSet,
    autocomplete: [
      {
        displayText: "set=<value>",
        description: "Sets a value which can be read from a child template.",
        snippet: "set=${1:value}",
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#set",
      },
    ],
  },
  "<get>": {
    translate: translateGet,
    autocomplete: [
      {
        displayText: 'get/<name>="<from>"',
        description: "Gets a value provided from another template.",
        snippet: 'get/${1:name}="${2:from}"',
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#get",
      },
    ],
  },
  "<yield>": {
    translate: translateYield,
    autocomplete: [
      {
        displayText: "yield=<value>",
        description: "Provides a value for use in a parent template.",
        snippet: "yield=${1:value}",
        descriptionMoreURL: "https://markojs.com/docs/core-tags/#yield",
      },
    ],
  },
  "<style>": {
    translate: translateStyle,
    "@type": { enum: ["css", "less", "scss", "text/css"] },
  },
};
