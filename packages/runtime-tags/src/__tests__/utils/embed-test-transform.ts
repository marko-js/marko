import type { types as t } from "@marko/compiler";
import path from "path";

import type { TestConfig } from "../main.test";

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
