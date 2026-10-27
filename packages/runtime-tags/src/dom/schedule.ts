import { run } from "./queue";
let runTask: undefined | (() => void);
let isScheduled: undefined | 0 | 1;
let channel: MessageChannel | undefined;

export function schedule() {
  if (!isScheduled) {
    if (MARKO_DEBUG) {
      if ((console as any).createTask) {
        const task = (console as any).createTask("queue");
        runTask = (_?: never) => task.run(run);
      } else {
        runTask = run;
      }
    }

    isScheduled = 1;
    // A form reads its fields once its submit dispatch ends, so a render that
    // dispatch (or its submitter's click) causes waits for the frame instead.
    const ev = window.event as
      | (Event & { target: { form?: unknown } })
      | undefined;
    (ev?.type === "submit" || (ev?.target.form && ev.type === "click")
      ? requestAnimationFrame
      : queueMicrotask)(flushAndWaitFrame);
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
    channel.port1.onmessage = (_) => {
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
