import fs from "fs";
import path from "path";
import glob from "tiny-glob";
import * as compiler from "@marko/compiler";
import snap from "mocha-snap";

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

describe("translator-interop", () => {
  const fixturesDir = path.join(__dirname, "fixtures");
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;

    describe(entry, () => {
      const resolve = (file: string) => path.join(fixturesDir, entry, file);
      const fixtureDir = resolve(".");

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

      describe("compile", () => {
        it("html", () => snapAllTemplates(htmlConfig));
        it("dom", () => snapAllTemplates(domConfig));
      });
    });
  }
});

async function compileCode(templateFile: string, config: compiler.Config) {
  return (await compiler.compileFile(templateFile, config)).code;
}
