import {
  assertNodeType,
  assertValueType,
  arrayOfType,
  chain,
  assertEach
} from "@babel/types/lib/definitions/utils";

import { functionCommon } from "@babel/types/lib/definitions/core";
const valueFieldCommon = {
  value: {
    validate: assertValueType("string")
  }
};

const MarkoDefinitions = {
  MarkoDocumentType: {
    aliases: ["Marko", "Statement"],
    builder: ["value"],
    fields: { ...valueFieldCommon }
  },

  MarkoDeclaration: {
    aliases: ["Marko", "Statement"],
    builder: ["value"],
    fields: { ...valueFieldCommon }
  },

  MarkoCDATA: {
    aliases: ["Marko", "Statement"],
    builder: ["value"],
    fields: { ...valueFieldCommon }
  },

  MarkoComment: {
    aliases: ["Marko", "Statement"],
    builder: ["value"],
    fields: { ...valueFieldCommon }
  },

  MarkoText: {
    aliases: ["Marko", "Statement"],
    builder: ["value"],
    fields: { ...valueFieldCommon }
  },

  MarkoPlaceholder: {
    aliases: ["Marko", "Statement"],
    builder: ["value", "escape"],
    visitor: ["value"],
    fields: {
      value: {
        validate: assertNodeType("Expression")
      },
      escape: {
        validate: assertValueType("boolean"),
        default: true
      }
    }
  },

  MarkoScriptlet: {
    aliases: ["Marko", "Statement"],
    builder: ["body", "static"],
    visitor: ["body"],
    fields: {
      body: {
        validate: arrayOfType(["Statement"])
      },
      static: {
        validate: assertValueType("boolean"),
        default: false
      }
    }
  },

  MarkoClass: {
    aliases: ["Marko", "Statement"],
    builder: ["body"],
    visitor: ["body"],
    fields: {
      body: {
        validate: assertNodeType("ClassBody")
      }
    }
  },

  MarkoAttribute: {
    aliases: ["Marko"],
    builder: ["name", "value", "modifier", "arguments", "default"],
    visitor: ["value", "arguments"],
    fields: {
      name: {
        validate: assertValueType("string")
      },
      value: {
        validate: assertNodeType("Expression"),
        optional: true
      },
      modifier: {
        validate: assertValueType("string"),
        optional: true
      },
      arguments: {
        validate: chain(
          assertValueType("array"),
          assertEach(assertNodeType("Expression", "SpreadElement"))
        ),
        optional: true
      },
      default: {
        validate: assertValueType("boolean"),
        optional: true
      }
    }
  },

  MarkoSpreadAttribute: {
    aliases: ["Marko"],
    builder: ["value"],
    visitor: ["value"],
    fields: {
      value: {
        validate: assertNodeType("Expression"),
        optional: true
      }
    }
  },

  MarkoTagBody: {
    aliases: ["Marko", "BlockParent", "Scope"],
    builder: ["params", "body"],
    visitor: ["params", "body"],
    fields: {
      params: {
        ...functionCommon.params,
        default: []
      },
      body: {
        validate: arrayOfType([
          "MarkoTag",
          "MarkoCDATA",
          "MarkoText",
          "MarkoPlaceholder",
          "MarkoScriptlet",
          "MarkoComment"
        ]),
        default: []
      }
    }
  },

  MarkoTag: {
    aliases: ["Marko", "Statement"],
    builder: [
      "name",
      "attributes",
      "body",
      "arguments",
      "var",
      "properties",
      "runtimeFlags"
    ],
    visitor: ["name", "attributes", "body", "arguments", "var"],
    fields: {
      name: {
        validate: assertNodeType("Expression")
      },
      attributes: {
        validate: arrayOfType(["MarkoAttribute", "MarkoSpreadAttribute"]),
        default: []
      },
      body: {
        validate: assertNodeType("MarkoTagBody")
      },
      arguments: {
        validate: chain(
          assertValueType("array"),
          assertEach(assertNodeType("Expression", "SpreadElement"))
        ),
        optional: true
      },
      properties: {
        validate: arrayOfType(["ObjectProperty"]),
        default: []
      },
      handlers: {
        validate: assertEach(assertNodeType("Expression")),
        optional: true
      },
      rawValue: {
        validate: assertValueType("string"),
        optional: true
      },
      runtimeFlags: {
        validate: assertValueType("number"),
        default: 0
      },
      key: {
        validate: assertNodeType("Expression"),
        optional: true
      },
      var: {
        validate: assertNodeType("LVal"),
        optional: true
      }
    }
  }
};

export default MarkoDefinitions;
export const MARKO_TYPES = Object.keys(MarkoDefinitions);
export const MARKO_ALIAS_TYPES = Array.from(
  new Set(
    MARKO_TYPES.reduce((all, t) => all.concat(MarkoDefinitions[t].aliases), [])
  )
);
