import fs from "fs";
import path from "path";
import glob from "tiny-glob";
import * as compiler from "@marko/compiler";
import snap from "mocha-snap";
import createBrowser from "../../../translator/src/__tests__/utils/create-browser";
import createMutationTracker from "../../../translator/src/__tests__/utils/track-mutations";
import { isWait } from "../../../translator/src/__tests__/utils/resolve";
import register from "@marko/compiler/register";
import type { DOMWindow } from "jsdom";

const baseConfig: compiler.Config = {
  translator: require.resolve(".."),
  babelConfig: {
    babelrc: false,
    configFile: false,
  },
  writeVersionComment: false,
};

const htmlConfig: compiler.Config = { ...baseConfig, output: "html" };
const domConfig: compiler.Config = { ...baseConfig, output: "dom" };

type Result = {
  browser: ReturnType<typeof createBrowser>;
  tracker: ReturnType<typeof createMutationTracker>;
};

type TestConfig = {
  context?: Record<string, unknown>;
  steps?: unknown[] | (() => Promise<unknown[]>);
  skip_dom?: boolean;
  skip_html?: boolean;
  skip_csr?: boolean;
  skip_ssr?: boolean;
  skip_resume?: boolean;
  manual_csr?: boolean;
  manual_ssr?: boolean;
  manual_resume?: boolean;
  error_compiler?: boolean;
  error_runtime?: boolean;
};

describe("translator-interop", () => {
  before(() => {
    uncachePackage("@marko/translator-default");
    uncachePackage("@marko/translator-fluurt");
  });

  const fixturesDir = path.join(__dirname, "fixtures");
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;

    describe(entry, () => {
      const resolve = (file: string) => path.join(fixturesDir, entry, file);
      const fixtureDir = resolve(".");
      const templateFile = resolve("template.marko");

      const config: TestConfig = (() => {
        try {
          return require(resolve("test.ts"));
          // eslint-disable-next-line no-empty
        } catch {
          return {};
        }
      })();

      const snapMD = (fn: () => unknown) =>
        (config.error_runtime ? snap.catch : snap)(fn, {
          ext: `.md`,
          dir: fixtureDir,
        });

      const snapAllTemplates = async (compilerConfig: compiler.Config) => {
        const additionalMarkoFiles = await glob(resolve("**/*.marko"));
        const finalConfig: compiler.Config = {
          ...compilerConfig,
          resolveVirtualDependency(_filename, { code, virtualPath }) {
            return `virtual:${virtualPath} ${code}`;
          },
        };
        const errors: Error[] = [];
        const targetSnap = /* config.error_compiler ? snap.catch : */ snap;

        for (const file of additionalMarkoFiles) {
          const name = path
            .relative(fixtureDir, file)
            .replace(
              ".marko",
              /* config.error_compiler ? ".error.txt" : */ ".js"
            );
          await targetSnap(() => compileCode(file, finalConfig), {
            file: name,
            dir: fixtureDir,
          });
        }

        if (errors.length === 1) {
          throw errors[0];
        } else if (errors.length > 1) {
          throw new AggregateError(
            errors,
            "\n" + errors.map((e) => e.toString()).join("\n")
          );
        }
      };

      let csrResult: Result;

      const csr = async () => {
        if (csrResult) return csrResult;

        const browser = createBrowser({
          dir: __dirname,
          extensions: register({
            ...domConfig,
            extensions: {},
          }),
        });

        const { window } = browser;
        const { document } = window;
        const throwErrors = trackErrors(window);

        const [input, ...steps] =
          typeof config.steps === "function"
            ? await config.steps()
            : config.steps || [];
        const template = browser.require(templateFile).default;
        const container = Object.assign(document.createElement("div"), {
          TEST_ROOT: true,
        });
        const tracker = createMutationTracker(browser.window, container);

        document.body.appendChild(container);

        let updateInput: (input: unknown) => void;
        let runUpdates: () => void;

        if (template.insertBefore) {
          // Marko 6
          const instance = template.insertBefore(container, null, input);
          const { run } = browser.require(
            "@marko/runtime-fluurt/dist/debug/dom"
          ) as typeof import("../../../runtime/src/dom");
          updateInput = (input) => instance.update(input);
          runUpdates = run;
        } else {
          // Marko 5
          const result = template.renderSync(input).appendTo(container);
          const component = result.getComponent();
          updateInput = (input) => (component.input = input);
          runUpdates = () => component.update();
        }

        const { run } = browser.require(
          "@marko/runtime-fluurt/dist/debug/dom"
        ) as typeof import("../../../runtime/src/dom");

        throwErrors();
        tracker.logUpdate(input);

        for (const update of steps) {
          if (isWait(update)) {
            await update();
          } else if (typeof update === "function") {
            await update(document.documentElement);
            runUpdates();
            run();
            tracker.logUpdate(update);
          } else {
            updateInput(update);
            tracker.logUpdate(update);
          }

          throwErrors();
        }

        tracker.cleanup();

        return (csrResult = { browser, tracker });
      };

      describe("compile", () => {
        it("html", () => snapAllTemplates(htmlConfig));
        it("dom", () => snapAllTemplates(domConfig));
      });

      describe("render", () => {
        (config.skip_csr ? it.skip : it)("csr", async () => {
          await snapMD(async () => (await csr()).tracker.getLogs());
        });
      });
    });
  }
});

async function compileCode(templateFile: string, config: compiler.Config) {
  return (await compiler.compileFile(templateFile, config)).code;
}

function uncachePackage(packageName: string) {
  const resolved = require.resolve(packageName);
  const root = path.dirname(resolved);
  Object.keys(require.cache).forEach((key) => {
    if (key.startsWith(root)) {
      delete require.cache[key];
    }
  });
}

function trackErrors(window: DOMWindow) {
  const errors: Set<Error> = new Set();
  const throwErrors = () => {
    switch (errors.size) {
      case 0:
        return;
      case 1:
        throw [...errors][0];
      default:
        throw new AggregateError(errors);
    }
  };

  window.addEventListener("error", (ev) => {
    errors.add(ev.error.detail || ev.error);
    ev.preventDefault();
  });
  window.addEventListener("unhandledrejection", (ev) => {
    errors.add(ev.reason.detail || ev.reason);
    ev.preventDefault();
  });

  return throwErrors;
}
