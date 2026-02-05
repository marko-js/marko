/**********************************************************************************************
Some of the source code in this file is sourced from https://github.com/babel/babel, and is licensed as below:

MIT License

Copyright (c) 2014-present Sebastian McKenzie and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

***********************************************************************************************/

import { MARKO_TYPES } from "@babel/types";
import fs from "fs";

const HUB_INTERFACE = "export interface HubInterface {";
const HUB_CLASS =
  "export class Hub implements HubInterface {\n    constructor();";
const IMPORT = 'import * as t from "@babel/types"';
const EXPORT_NODE = "export import Node = t.Node;";
const NODE_PATH_GET =
  "get(key: string, context?: boolean | TraversalContext): NodePath | NodePath[];";
const IS =
  "// #region ------------------------- isXXX -------------------------";
const ASSERT =
  "// #region ------------------------- assertXXX -------------------------";
const BREAK = "\n    ";

const data = fs.readFileSync(
  require.resolve("@types/babel__traverse/index.d.ts"),
  "utf8",
);
[HUB_INTERFACE, HUB_CLASS, IMPORT, EXPORT_NODE, IS, ASSERT].forEach((str) => {
  if (data.indexOf(str) === -1) {
    console.error(
      `Unable to find \`${str}\` in @types/babel__traverse/index.d.ts`,
    );
    process.exit(1);
  }
});

var result = data
  .replace(
    HUB_INTERFACE,
    `export interface BabelFile {
    ast: t.File,
    path: NodePath<t.Program>,
    hub: HubInterface,
    code: string,
    opts: Record<string, unknown> & { filename: string },
    metadata: Record<string, unknown> & {
      marko: import("@marko/compiler").MarkoMeta
    },
    markoOpts: Required<import('@marko/compiler').Config>
}

${HUB_INTERFACE}
    file: BabelFile;`,
  )
  .replace(
    HUB_CLASS,
    `${HUB_CLASS}
    file: BabelFile;`,
  )
  .replace(IMPORT, `import * as t from './types'`)
  .replace(EXPORT_NODE, "type Node = t.Node")
  .replace(NODE_PATH_GET, "")
  .replace(
    IS,
    IS +
      BREAK +
      MARKO_TYPES.map(
        (t) => `is${t}(opts?: object | null): this is NodePath<t.${t}>;`,
      ).join(BREAK),
  )
  .replace(
    ASSERT,
    ASSERT +
      BREAK +
      MARKO_TYPES.map(
        (t) =>
          `assert${t}(opts?: object | null): asserts this is NodePath<t.${t}>;`,
      ).join(BREAK),
  );

export default result;
