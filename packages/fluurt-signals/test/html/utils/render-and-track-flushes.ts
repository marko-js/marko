import { JSDOM } from "jsdom";
import { Writable } from "stream";
import diffableHTML from "diffable-html";
import { createRenderer } from "../../../html/index";
import reorderRuntime from "../../../html/reorder-runtime";

const reorderRuntimeString = String(reorderRuntime);

export default async function renderAndTrackFlushes(test: {
  input: Record<string, unknown>;
  default: (input: Record<string, unknown>) => void;
}) {
  const { input } = test;
  const output: string[] = [];
  const render = createRenderer(test.default);

  let html = "";

  await render(input, {
    write(data: string) {
      html += data;
      output.push(
        `# write\n${indent(
          data.replace(reorderRuntimeString, "REORDER_RUNTIME")
        )}`
      );
    },
    flush() {
      output[output.length - 1] += `\n_flush_`;
    },
    end(data?: string) {
      output.push(`# end${data ? `\n${indent(data)}` : ""}`);
    },
    emit(type, ...args: unknown[]) {
      output.push(`# emit ${type}${args.map(arg => `\n${indent(arg)}`)}`);
    }
  } as Writable & { flush(): void });

  const browser = new JSDOM(html, { runScripts: "dangerously" });
  output.push(
    `# final HTML\n${indent(
      diffableHTML(
        browser.window.document.documentElement.outerHTML.replace(
          reorderRuntimeString,
          "REORDER_RUNTIME"
        )
      )
    )}`
  );

  return `${output.join("\n\n")}\n`;
}

function indent(data: unknown) {
  return String(data)
    .split("\n")
    .map(line => `  ${line}`)
    .join("\n");
}
