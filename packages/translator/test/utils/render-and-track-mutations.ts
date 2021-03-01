import createBrowser from "./create-browser";
import createMutationTracker from "./track-mutations";
import { wait, isWait } from "./resolve";

const browser = createBrowser({
  dir: __dirname,
  html: ""
});

const window = browser.window;
const document = window.document;

const { createRenderFn, runInBatch } = browser.require(
  "@marko/runtime-fluurt/src/dom/index"
) as typeof import("@marko/runtime-fluurt/src/dom/index");

interface Test {
  wait?: number;
  inputs: [
    Record<string, unknown>,
    ...Array<
      | Record<string, unknown>
      | ((container: Element) => void)
      | ReturnType<typeof wait>
    >
  ];
  default: ReturnType<typeof createRenderFn>;
  html: string;
  FAILS_HYDRATE?: boolean;
}

export default async function renderAndGetMutations(
  test: string,
  inputs = []
): Promise<string> {
  if (!Array.isArray(inputs)) inputs = [inputs];
  const { default: render } = browser.require(test) as Test;
  const [firstInput] = inputs;
  const container = Object.assign(document.createElement("div"), {
    TEST_ROOT: true
  });
  const tracker = createMutationTracker(window, container);

  document.body.appendChild(container);

  try {
    tracker.beginUpdate();

    const instance = render(firstInput);
    container.appendChild(instance);

    // const initialHTML = container.innerHTML;
    tracker.logUpdate(firstInput);

    for (const update of inputs.slice(1)) {
      if (isWait(update)) {
        await (update as any)();
      } else {
        tracker.beginUpdate();
        if (typeof update === "function") {
          runInBatch(() => (update as any)(container));
        } else {
          instance.rerender(update);
        }
        tracker.logUpdate(update);
      }
    }

    // if (!FAILS_HYDRATE) {
    //   const inputSignal = source(firstInput);
    //   (window as any).M$c = [[0, id, dynamicKeys(inputSignal, renderer.input)]];
    //   container.innerHTML = `<!M$0>${initialHTML}<!M$0/>`;
    //   container.insertBefore(document.createTextNode(""), container.firstChild);
    //   tracker.dropUpdate();
    //   init();

    //   tracker.logUpdate(firstInput);
    //   const logs = tracker.getRawLogs();
    //   logs[logs.length - 1] = "--- Hydrate ---\n" + logs[logs.length - 1];

    //   // Hydrate should end up with the same html as client side render.
    //   assert.equal(container.innerHTML, initialHTML);

    //   // Run the same updates after hydrate and ensure the same mutations.
    //   let resultIndex = 0;
    //   for (const update of inputs.slice(1)) {
    //     if (wait) {
    //       await resolveAfter(null, wait);
    //     }
    //     if (typeof update === "function") {
    //       update(container);
    //     } else {
    //       const batch = beginBatch();
    //       set(inputSignal, update);
    //       endBatch(batch);
    //     }

    //     assert.equal(
    //       tracker.getUpdate(update),
    //       tracker.getRawLogs()[++resultIndex]
    //     );
    //   }

    //   if (wait) {
    //     await resolveAfter(null, wait);
    //   }
    // }

    return tracker.getLogs();
  } finally {
    tracker.cleanup();
    document.body.removeChild(container);
  }
}
