import createBrowser from "jsdom-context-require";
import createMutationTracker from "./track-mutations";
import { wait, isWait } from "../../utils/resolve";
import { DOMWindow } from "jsdom";

const browser = createBrowser({
  dir: __dirname,
  html: ""
});

const window = browser.window as DOMWindow;
const document = window.document;
window.queueMicrotask = queueMicrotask;
window.requestAnimationFrame = (fn) => setTimeout(fn);

const {
  createRenderFn
} = browser.require(
  "../../../dom/index"
) as typeof import("../../../dom/index");

interface Test {
  wait?: number;
  inputs: [
    Record<string, unknown>,
    ...Array<Record<string, unknown> | ((container: Element) => void) | ReturnType<typeof wait>>
  ];
  default: ReturnType<typeof createRenderFn>;
  html: string;
  FAILS_HYDRATE?: boolean;
}

export default async function renderAndGetMutations(
  id: string,
  test: string
): Promise<string> {
  const { default: render, inputs } = browser.require(
    test
  ) as Test;
  const [firstInput] = inputs;
  const container = Object.assign(document.createElement("div"), {
    TEST_ROOT: true
  });
  const tracker = createMutationTracker(window, container);

  document.body.appendChild(container);

  try {
    const instance = render(firstInput);
    container.appendChild(instance);

    // const initialHTML = container.innerHTML;
    tracker.logUpdate(firstInput);

    for (const update of inputs.slice(1)) {
      if (isWait(update)) {
        await update();
      } else {
        if (typeof update === "function") { 
          update(container);
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
