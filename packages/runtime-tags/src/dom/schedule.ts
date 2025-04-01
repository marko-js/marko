import { run } from "./queue";
let runTask: undefined | (() => void);
const port2 = /* @__PURE__ */ (() => {
  const { port1, port2 } = new MessageChannel();
  port1.onmessage = () => {
    isScheduled = 0;
    if (MARKO_DEBUG) {
      const run = runTask!;
      runTask = undefined;
      run();
    } else {
      run();
    }
  };
  return port2;
})();

let isScheduled: undefined | 0 | 1;

export function schedule() {
  if (!isScheduled) {
    if (MARKO_DEBUG) {
      if ((console as any).createTask) {
        const task = (console as any).createTask("queue");
        runTask = () => task.run(run);
      } else {
        runTask = run;
      }
    }

    isScheduled = 1;
    queueMicrotask(flushAndWaitFrame);
  }
}

function flushAndWaitFrame() {
  if (MARKO_DEBUG) {
    runTask!();
  } else {
    run();
  }

  requestAnimationFrame(triggerMacroTask);
}

function triggerMacroTask() {
  port2.postMessage(0);
}
