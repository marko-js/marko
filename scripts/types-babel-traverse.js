const fs = require("fs");
const path = require("path");
require("../packages/babel-types/dist/types/patch");
const {
  MARKO_TYPES
} = require("../packages/babel-types/dist/types/definitions");

const IMPORT = "import * as t from '@babel/types'";
const IS =
  "//#region ------------------------- isXXX -------------------------";
const ASSERT =
  "//#region ------------------------- assertXXX -------------------------";
const BREAK = "\n    ";

fs.readFile(
  path.join(__dirname, "../node_modules/@types/babel__traverse/index.d.ts"),
  "utf8",
  (err, data) => {
    if (err) return console.error(err);

    [IMPORT, IS, ASSERT].forEach(str => {
      if (data.indexOf(str) === -1) {
        console.error(
          `Unable to find \`${str}\` in @types/babel__traverse/index.d.ts`
        );
        process.exit(1);
      }
    });

    var result = data
      .replace(IMPORT, `import { types as t } from '@marko/babel-types'`)
      .replace(
        IS,
        IS +
          BREAK +
          MARKO_TYPES.map(
            t => `is${t}(props?: object | null): this is NodePath<t.${t}>;`
          ).join(BREAK)
      )
      .replace(
        ASSERT,
        ASSERT +
          BREAK +
          MARKO_TYPES.map(t => `assert${t}(props?: object | null): void;`).join(
            BREAK
          )
      );

    fs.writeFile(
      path.join(__dirname, "../packages/babel-types/traverse.d.ts"),
      result,
      "utf8",
      err => {
        if (err) return console.error(err);
      }
    );
  }
);
