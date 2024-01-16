import { run } from "./queue";

const port2 = /* @__PURE__ */ (() => {
  const { port1, port2 } = new MessageChannel();
  port1.onmessage = () => {
    isScheduled = false;
    run();
  };
  return port2;
})();

export let isScheduled: boolean;

export function schedule() {
  if (!isScheduled) {
    isScheduled = true;
    queueMicrotask(flushAndWaitFrame);
  }
}

function flushAndWaitFrame() {
  run();
  requestAnimationFrame(triggerMacroTask);
}

function triggerMacroTask() {
  port2.postMessage(0);
}
