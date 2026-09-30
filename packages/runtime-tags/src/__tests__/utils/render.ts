import fs from "fs";
import path from "path";

import type * as compiler from "@marko/compiler";

import type { Input } from "../../common/types";
import type { TestConfig } from "../main.test";
import { createServerRunner } from "./bundle";
import { captureConsole, type ConsoleRecord } from "./capture-console";
import createBrowser from "./create-browser";
import {
  type Destroy,
  type Flush,
  type FlushType,
  isDestroy,
  isFlush,
  isThrows,
  isWait,
  resetResolveState,
  resolveAfter,
  type Throws,
  type Wait,
  wait,
} from "./resolve";
import createMutationTracker, { formatBody } from "./track-mutations";

export type Step =
  | Input
  | Wait
  | Flush
  | Destroy
  | Throws
  | ((document: Document) => unknown);
export type Steps = [Input, ...Step[]];
export type Browser = ReturnType<typeof createBrowser>;
export type ServerRunner = Awaited<
  ReturnType<typeof createServerRunner<{ template: string }>>
>;

export interface Render {
  config: TestConfig;
  /** The fixture's own build. */
  page(): Promise<ServerRunner>;
  /** Every browser a run opens, for the caller to close. */
  browsers: Browser[];
  /** Drain pending work after the steps and print the settled page. */
  settle: boolean;
  /** The page is a host holding the fixture's input, so input updates go
   * through it and apply after resume too. */
  hosted?: boolean;
}

export interface Wrapper {
  name: string;
  wrap(content: string): string;
}

// Content a host renders the fixture in, which must not change what it logs.
export const wrappers: Wrapper[] = [
  { name: "<if>", wrap: (content) => `<if=current>\n${content}\n</if>` },
  {
    name: "<for>",
    wrap: (content) => `<for|_| of=[current]>\n${content}\n</for>`,
  },
  {
    name: "<try>",
    wrap: (content) =>
      `<try>\n${content}\n<@catch|error|>\n\${String(error)}\n</@catch>\n</try>`,
  },
  {
    name: "a tag body",
    wrap: (content) => `<wrap-body>\n${content}\n</wrap-body>`,
  },
  {
    name: "a dynamic tag body",
    wrap: (content) =>
      `import WrapBody from "./tags/wrap-body.marko";\n<\${current && WrapBody}>\n${content}\n</>`,
  },
  {
    name: "<define>",
    wrap: (content) => `<define/Content>\n${content}\n</define>\n<Content/>`,
  },
];

// A host renders the fixture as a child whose input it holds in a `<let>`,
// so the fixture's input can change after resume.
export function createHostRunner(
  fixtureDir: string,
  opts: compiler.Config,
  interop?: boolean,
  wrapper?: Wrapper,
): Promise<ServerRunner> {
  const hostDir = path.join(
    fixtureDir,
    "dist",
    wrapper ? `host-${wrappers.indexOf(wrapper)}` : "host",
  );
  const hostFile = path.join(hostDir, "template.marko");
  const content = "<Template ...current/>";
  fs.mkdirSync(path.join(hostDir, "tags"), { recursive: true });
  fs.writeFileSync(
    hostFile,
    `import Template from "../../template.marko";
<let/current=input/>
<script>
  globalThis.updateTestInput = (next) => { current = next; };
</script>
${wrapper ? wrapper.wrap(content) : content}
`,
  );
  fs.writeFileSync(
    path.join(hostDir, "tags", "wrap-body.marko"),
    "<${input.content}/>\n",
  );
  return createServerRunner(
    hostDir,
    { template: "./template.marko" },
    {
      ...opts,
      cache: new Map(),
      optimizeKnownTemplates: opts.optimizeKnownTemplates && [
        ...opts.optimizeKnownTemplates,
        hostFile,
      ],
    },
    interop,
  );
}

interface HostContext {
  updateTestInput(input: Input): void;
}

export async function renderCSR(render: Render) {
  const { config } = render;
  resetResolveState();
  const browser = createBrowser();
  render.browsers.push(browser);
  const runClient = (await render.page()).clientRunner!;
  const { document } = browser.window;
  const { input, steps } = await getSteps(config);
  const tracker = createMutationTracker(browser);
  const { template, run } = await runClient(browser.ctx, rejectLoadOf(config));
  const instance = template.mount(input, document.body, "afterbegin");
  tracker.logRender(input);

  await runSteps(steps, tracker, browser, run, {
    onInput: render.hosted
      ? (next) => updateHost(browser, tracker, run, next)
      : (next) => {
          instance.update(next);
          tracker.logUpdate(next);
        },
    onDestroy() {
      instance.destroy();
    },
  });

  tracker.cleanup();
  return { browser, tracker, settled: await settle(render, browser, run) };
}

export async function renderSSR(render: Render) {
  const { config } = render;
  resetResolveState();
  const abortController = config.abort_ssr ? new AbortController() : undefined;
  const { input, steps } = await getSteps(config, abortController?.signal);
  const runner = await render.page();
  const chunks: string[] = [];
  const logs: ConsoleRecord[][] = [];
  const capture = captureConsole();

  try {
    const { template } = await runner.runServer();
    if (abortController) {
      input.$global = {
        ...(input.$global as any),
        signal: abortController.signal,
      };
    }
    let aborted = false;
    try {
      for await (const data of template.render(
        config.embedded
          ? {
              ...input,
              $global: {
                ...(input.$global as any),
                renderId: "embedded",
              },
            }
          : input,
      )) {
        chunks.push(data);
        logs.push(capture.records());
        if (abortController && !aborted) {
          aborted = true;
          // The abort rejects the pending read, ending the stream.
          abortController.abort();
        }
      }
    } catch (err) {
      // The disconnect is the point; anything else still throws.
      if (!aborted || (err as Error).name !== "AbortError") throw err;
    }
    if (abortController) {
      // Hold the capture open past the inputs' settlement so late
      // renders from a stranded body reach the snapshot.
      await new Promise((resolve) => setTimeout(resolve, 1100));
      logs.push(capture.records());
    }
  } finally {
    resetResolveState();
    capture.cleanup();
  }

  const rejectLoad = rejectLoadOf(config);
  const browser = createBrowser(runner.assets, config.load_order, rejectLoad);
  render.browsers.push(browser);
  const { window } = browser;
  const flushNext = browser.stream(chunks);
  // As in a browser, a resumed chunk's work schedules its own flush; a
  // missing one leaves it pending.
  const flushAndResume = async () => {
    hasFlush = flushNext();
    await browser.runAsyncScripts();
  };
  // Attach the tracker's error listener before the first flush so
  // errors thrown by inline resume scripts in it aren't swallowed.
  const tracker = createMutationTracker(browser);
  let hasFlush = flushNext();
  for (let i = config.entry_delay || 0; i && hasFlush; i--) {
    hasFlush = flushNext();
  }

  for (const group of logs) {
    for (const { type, args } of group) {
      window.console[type](...args);
    }
  }

  await browser.runAsyncScripts(() => tracker.logRender(input));
  const { run } = browser.ctx as typeof import("@marko/runtime-tags/dom");

  await runSteps(steps, tracker, browser, run, {
    onFlush: hasFlush ? flushAndResume : undefined,
    onInput: render.hosted
      ? (next) => updateHost(browser, tracker, run, next)
      : undefined,
  });

  while (hasFlush) {
    await resolveAfter(0, 1);
    tracker.beginUpdate();
    await flushAndResume();
    tracker.logUpdate();
  }

  tracker.cleanup();
  const settled = await settle(render, browser, run);
  return { browser, tracker, chunks, settled };
}

async function updateHost(
  browser: Browser,
  tracker: ReturnType<typeof createMutationTracker>,
  run: () => void,
  input: Input,
) {
  tracker.beginUpdate();
  (browser.ctx as HostContext).updateTestInput(input);
  run();
  await browser.runAsyncScripts();
  run();
  tracker.logUpdate(input);
}

// Pending async work lands before the settled check compares.
async function settle(render: Render, browser: Browser, run: () => void) {
  if (!render.settle) return "";
  await wait();
  await browser.runAsyncScripts();
  run();
  return formatBody(browser.window.document.body);
}

async function runSteps(
  steps: Step[],
  tracker: ReturnType<typeof createMutationTracker>,
  browser: Browser,
  run: () => void,
  opts: {
    onInput?: (input: Input) => unknown;
    onFlush?: () => Promise<void>;
    onDestroy?: () => void;
  },
) {
  for (const update of steps) {
    if (isDestroy(update)) {
      // only the client tests have an instance to destroy
      if (!opts.onDestroy) break;
      tracker.beginUpdate();
      opts.onDestroy();
      run();
      tracker.logUpdate("Destroy");
    } else if (isWait(update)) {
      await update();
      await browser.runAsyncScripts();
      run();
      tracker.logUpdate();
    } else if (isFlush(update)) {
      if (update.flushType === "stream") {
        if (opts.onFlush) {
          tracker.beginUpdate();
          await opts.onFlush();
          tracker.logUpdate();
        }
      } else {
        tracker.beginUpdate();
        browser.flush(update.flushType as Exclude<FlushType, "stream">);
        run();
        tracker.logUpdate();
      }
    } else if (typeof update === "function") {
      tracker.beginUpdate();
      await update(browser.window.document);
      run();
      await browser.runAsyncScripts();
      run();
      if (isThrows(update)) {
        tracker.logErrors(update);
      } else {
        tracker.logUpdate(update);
      }
    } else if (opts.onInput) {
      await opts.onInput(update);
    } else {
      // A resumed page's input is fixed, so its run ends at an input update.
      break;
    }
  }
}

async function getSteps(config: TestConfig, signal?: AbortSignal) {
  const [input = {} as Input, ...steps] =
    typeof config.steps === "function"
      ? await config.steps(signal)
      : (config.steps ?? []);
  return { input, steps };
}

function rejectLoadOf({ reject_load }: TestConfig) {
  return (
    reject_load &&
    ((id: string) => reject_load.some((substring) => id.includes(substring)))
  );
}
