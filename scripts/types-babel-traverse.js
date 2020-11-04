const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "../node_modules/@types/babel__traverse/index.d.ts"),
  "utf8",
  (err, data) => {
    if (err) return console.log(err);
    var result = data.replace(
      `import * as t from '@babel/types';`,
      `import { types as t } from '@marko/babel-types';`
    );

    fs.writeFile(
      path.join(__dirname, "../packages/babel-types/traverse.d.ts"),
      result,
      "utf8",
      err => {
        if (err) return console.log(err);
      }
    );
  }
);
