type Task = () => void;
const { port1, port2 } = new MessageChannel();
let queue: Task[] = [];
let queued: boolean;

port1.onmessage = () => {
  queued = false;
  flush();
}

export default function queueNonPaintBlockingTask(fn: Task) {
  if (!queued) {
    queued = true;
    queueMicrotask(flushAndWaitFrame);
  }

  queue.push(fn);
}

function flushAndWaitFrame() {
  flush();
  requestAnimationFrame(triggerMacroTask);
}

function flush() {
  for (let i = queue.length; i--;) {
    queue[i]();
  }

  queue = [];
}

function triggerMacroTask() {
  port2.postMessage(0);
}