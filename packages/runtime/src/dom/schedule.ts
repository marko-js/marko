import { run } from "./queue";

const { port1, port2 } = new MessageChannel();
export let isScheduled: boolean;

port1.onmessage = () => {
  isScheduled = false;
  run();
};

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
