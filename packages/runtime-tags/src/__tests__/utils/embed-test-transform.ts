import { createRequire } from "module";
import path from "path";

import type { types as t } from "@marko/compiler";

import type { TestConfig } from "../main.test";

const require = createRequire(import.meta.url);

export default {
  Program(program) {
    const filename = program.hub.file.opts.filename;

    if (
      /\/__tests__\/fixtures(-interop)?\/[^/]+\/template\.marko$/.test(filename)
    ) {
      const config: TestConfig = (() => {
        try {
          return (
            require(path.join(path.dirname(filename), "test.ts")).config ?? {}
          );
        } catch {
          return {};
        }
      })();

      (program.node.extra ??= {}).page = !config.embedded;
    }
  },
} as t.Visitor;
