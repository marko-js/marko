import Benchmark from "benchmark";
import {
  queue as queueHeap,
  run as runHeap,
} from "../packages/runtime/src/dom/queue-heap";
import {
  queue as queueSortedInsert,
  run as runSortedInsert,
} from "../packages/runtime/src/dom/queue-sorted-insert";
import {
  queue as queueHeap2,
  run as runHeap2,
} from "../packages/runtime/src/dom/queue-heap-2";
import {
  queue as queueNaive,
  run as runNaive,
} from "../packages/runtime/src/dom/queue-naive";
import {
  queue as queueDeferredSort,
  run as runDeferredSort,
} from "../packages/runtime/src/dom/queue-deferred-sort";

function queueImmediate(scope, fn) {
  fn(scope);
}

function runImmediate() {}

const SPACE = 2 ** 8;
const dummyScope = Object.assign([], { ___id: 0 }) as any;
function dummyFunction() {}

function ordered(queue, run) {
  for (let i = 0; i < 10000; i++) {
    const priority = i * SPACE;
    queue(dummyScope, dummyFunction, priority);
  }
  run();
}

function tiered(queue, run) {
  for (let i = 0; i < 10000; i++) {
    const priority = ((i % 1000) * 10 + Math.floor(i / 1000)) * SPACE;
    queue(dummyScope, dummyFunction, priority);
  }
  run();
}

function reverse(queue, run) {
  for (let i = 9999; i >= 0; i--) {
    const priority = i * SPACE;
    queue(dummyScope, dummyFunction, priority);
  }
  run();
}

function nested(queue, run) {
  for (let i = 0; i < 100; i++) {
    const priority = i * SPACE;
    queue(
      dummyScope,
      () => {
        queue(dummyScope, dummyFunction, priority + 1);
        for (let j = 0; j < 10; j++) {
          const priority_1 = priority + 2 + (j * SPACE) / 16;
          queue(
            dummyScope,
            () => {
              queue(dummyScope, dummyFunction, priority_1 + 1);
              for (let k = 0; k < 10; k++) {
                const priority_2 = priority_1 + 2 + k;
                queue(
                  dummyScope,
                  () => {
                    queue(dummyScope, dummyFunction, priority_2 + 1);
                  },
                  priority_2
                );
              }
            },
            priority_1
          );
        }
      },
      priority
    );
  }
  run();
}

const suite = new Benchmark.Suite();

[ordered, tiered, reverse, nested].forEach((exec) => {
  suite.add(`queue-heap-${exec.name}`, () => exec(queueHeap, runHeap));
  suite.add(`queue-heap-2-${exec.name}`, () => exec(queueHeap2, runHeap2));
  suite.add(`queue-sorted-insert-${exec.name}`, () =>
    exec(queueSortedInsert, runSortedInsert)
  );
  suite.add(`queue-deferred-sort-${exec.name}`, () =>
    exec(queueDeferredSort, runDeferredSort)
  );
  // Baselines - do not guarantee correct order
  suite.add(`queue-naive-${exec.name}`, () => exec(queueNaive, runNaive));
  suite.add(`queue-immediate-${exec.name}`, () =>
    exec(queueImmediate, runImmediate)
  );
});

suite
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run();

process.exit(0);
