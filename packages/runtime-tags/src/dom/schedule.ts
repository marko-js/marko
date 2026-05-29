import { run } from "./queue";
let runTask: undefined | (() => void);
let isScheduled: undefined | 0 | 1;
let channel: MessageChannel | undefined;

if (typeof window !== "undefined") {
  // On BFCache restore, the MessageChannel macro-task that normally resets
  // isScheduled to 0 may have been dropped during the freeze. Reset it here
  // and re-trigger scheduling so any effects deferred during the unload window
  // are flushed. queue.ts's pageshow listener fires first (registered earlier
  // because this module imports from it), so isUnloading is already false by
  // the time schedule() runs below.
  window.addEventListener(
    "pageshow",
    () => {
      isScheduled = 0;
      schedule();
    },
    { capture: true },
  );
}

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
