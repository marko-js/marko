import { run } from "./queue";
let task: any;
const port2 = /* @__PURE__ */ (() => {
  const { port1, port2 } = new MessageChannel();
  port1.onmessage = () => {
    isScheduled = false;
    if (MARKO_DEBUG) {
      task.run(run);
      task = undefined;
    } else {
      run();
    }
  };
  return port2;
})();

export let isScheduled: boolean;

export function schedule() {
  if (!isScheduled) {
    if (MARKO_DEBUG) {
      task = (console as any).createTask?.("queue") || {
        run(fn: any) {
          fn();
        },
      };
    }

    isScheduled = true;
    queueMicrotask(flushAndWaitFrame);
  }
}

function flushAndWaitFrame() {
  if (MARKO_DEBUG) {
    task.run(run);
  } else {
    run();
  }

  requestAnimationFrame(triggerMacroTask);
}

function triggerMacroTask() {
  port2.postMessage(0);
}
