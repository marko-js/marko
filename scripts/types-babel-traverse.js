const fs = require("fs");
const path = require("path");
require("../packages/compiler/dist/babel-types/types/patch");
const {
  MARKO_TYPES
} = require("../packages/compiler/dist/babel-types/types/definitions");

const HUB_INTERFACE = "export interface HubInterface {";
const HUB_CLASS =
  "export class Hub implements HubInterface {\n    constructor();";
const IMPORT = "import * as t from '@babel/types'";
const EXPORT_NODE = "export import Node = t.Node;";
const NODE_PATH_GET =
  "get(key: string, context?: boolean | TraversalContext): NodePath | NodePath[];";
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

    [HUB_INTERFACE, HUB_CLASS, IMPORT, EXPORT_NODE, IS, ASSERT].forEach(str => {
      if (data.indexOf(str) === -1) {
        console.error(
          `Unable to find \`${str}\` in @types/babel__traverse/index.d.ts`
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
    opts: Record<string, unknown>,
    metadata: Record<string, unknown> & {
      marko: {
        id: string,
        tags: string[],
        deps: Array<string | { type: string, code: string, path: string, virtualPath: string, [x:string]: unknown }>,
        watchFiles: string[]
      }
    },
    markoOpts: Required<import('@marko/compiler').Config>
}

${HUB_INTERFACE}
    file: BabelFile;`
      )
      .replace(
        HUB_CLASS,
        `${HUB_CLASS}
    file: BabelFile;`
      )
      .replace(IMPORT, `import * as t from './types'`)
      .replace(EXPORT_NODE, "type Node = t.Node")
      .replace(NODE_PATH_GET, "")
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

    process.stdout.write(result);
  }
);
