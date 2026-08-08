import { run } from "./queue";
let runTask: undefined | (() => void);
let isScheduled: undefined | 0 | 1;
let channel: MessageChannel | undefined;

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

// Won't fix: rAF gating means hidden documents (background tab, display:none
// iframe) batch renders/effects until visible; hidden-time work shouldn't use render state.
function flushAndWaitFrame() {
  requestAnimationFrame(triggerMacroTask);

  if (MARKO_DEBUG) {
    runTask!();
  } else {
    run();
  }
}

// Assumes a host MessageChannel (every browser has one); isScheduled only
// resets in its handler, so hosts lacking it must polyfill (see create-browser).
function triggerMacroTask() {
  if (!channel) {
    channel = new MessageChannel();
    channel.port1.onmessage = () => {
      isScheduled = 0;
      if (MARKO_DEBUG) {
        const run = runTask!;
        runTask = undefined;
        run();
      } else {
        run();
      }
    };
  }
  channel.port2.postMessage(0);
}
