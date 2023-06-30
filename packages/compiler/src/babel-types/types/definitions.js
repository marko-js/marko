import {
  assertNodeType,
  assertValueType,
  arrayOfType,
  chain,
  assertEach,
} from "@babel/types/lib/definitions/utils";

const valueFieldCommon = {
  value: {
    validate: assertValueType("string"),
  },
};

const MarkoDefinitions = {
  MarkoParseError: {
    aliases: ["Marko", "Expression", "Statement"],
    builder: ["source", "label", "errorLoc"],
    fields: {
      source: {
        validate: assertValueType("string"),
      },
      label: {
        validate: assertValueType("string"),
      },
      errorLoc: {
        optional: true,
        validate: assertValueType("object"),
      },
    },
  },
  MarkoDocumentType: {
    aliases: ["Marko", "Statement"],
    builder: ["value"],
    fields: { ...valueFieldCommon },
  },

  MarkoDeclaration: {
    aliases: ["Marko", "Statement"],
    builder: ["value"],
    fields: { ...valueFieldCommon },
  },

  MarkoCDATA: {
    aliases: ["Marko", "Statement"],
    builder: ["value"],
    fields: { ...valueFieldCommon },
  },

  MarkoComment: {
    aliases: ["Marko", "Statement"],
    builder: ["value"],
    fields: { ...valueFieldCommon },
  },

  MarkoText: {
    aliases: ["Marko", "Statement"],
    builder: ["value"],
    fields: { ...valueFieldCommon },
  },

  MarkoPlaceholder: {
    aliases: ["Marko", "Statement"],
    builder: ["value", "escape"],
    visitor: ["value"],
    fields: {
      value: {
        validate: assertNodeType("Expression"),
      },
      escape: {
        validate: assertValueType("boolean"),
        default: true,
      },
    },
  },

  MarkoScriptlet: {
    aliases: ["Marko", "Statement"],
    builder: ["body", "static"],
    visitor: ["body"],
    fields: {
      body: {
        validate: arrayOfType(["Statement"]),
      },
      static: {
        validate: assertValueType("boolean"),
        default: false,
      },
    },
  },

  MarkoClass: {
    aliases: ["Marko", "Statement"],
    builder: ["body"],
    visitor: ["body"],
    fields: {
      body: {
        validate: assertNodeType("ClassBody"),
      },
    },
  },

  MarkoAttribute: {
    aliases: ["Marko"],
    builder: ["name", "value", "modifier", "arguments", "default", "bound"],
    visitor: ["value", "arguments"],
    fields: {
      name: {
        validate: assertValueType("string"),
      },
      value: {
        validate: assertNodeType("Expression"),
      },
      modifier: {
        validate: assertValueType("string"),
        optional: true,
      },
      arguments: {
        validate: chain(
          assertValueType("array"),
          assertEach(assertNodeType("Expression", "SpreadElement"))
        ),
        optional: true,
      },
      default: {
        validate: assertValueType("boolean"),
        optional: true,
      },
      bound: {
        validate: assertValueType("boolean"),
        optional: true,
      },
    },
  },

  MarkoSpreadAttribute: {
    aliases: ["Marko"],
    builder: ["value"],
    visitor: ["value"],
    fields: {
      value: {
        validate: assertNodeType("Expression"),
      },
    },
  },

  MarkoTagBody: {
    aliases: ["Marko", "BlockParent", "Scope"],
    builder: ["body", "params"],
    visitor: ["params", "body"],
    fields: {
      params: {
        validate: chain(
          assertValueType("array"),
          assertEach(assertNodeType("Identifier", "Pattern", "RestElement"))
        ),
        default: [],
      },
      body: {
        validate: arrayOfType([
          "MarkoTag",
          "MarkoCDATA",
          "MarkoText",
          "MarkoPlaceholder",
          "MarkoScriptlet",
          "MarkoComment",
        ]),
        default: [],
      },
    },
  },

  MarkoTag: {
    aliases: ["Marko", "Statement"],
    builder: ["name", "attributes", "body", "arguments", "var"],
    visitor: ["name", "attributes", "body", "arguments", "var"],
    fields: {
      name: {
        validate: assertNodeType("Expression"),
      },
      attributes: {
        validate: arrayOfType(["MarkoAttribute", "MarkoSpreadAttribute"]),
        default: [],
      },
      body: {
        validate: assertNodeType("MarkoTagBody"),
      },
      arguments: {
        validate: chain(
          assertValueType("array"),
          assertEach(assertNodeType("Expression", "SpreadElement"))
        ),
        optional: true,
      },
      rawValue: {
        validate: assertValueType("string"),
        optional: true,
      },
      var: {
        validate: assertNodeType("LVal"),
        optional: true,
      },
    },
  },
};

export default MarkoDefinitions;
export const MARKO_TYPES = Object.keys(MarkoDefinitions);
export const MARKO_ALIAS_TYPES = Array.from(
  new Set(
    MARKO_TYPES.reduce((all, t) => all.concat(MarkoDefinitions[t].aliases), [])
  )
);
