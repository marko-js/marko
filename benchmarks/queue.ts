import Benchmark from "benchmark";
import { runWithScope } from "../packages/runtime/src/dom/scope";
import {
  queue as queueHeap,
  run as runHeap,
} from "../packages/runtime/src/dom/queue-heap";
import {
  queue as queueSortedInsert,
  run as runSortedInsert,
} from "../packages/runtime/src/dom/queue-sorted-insert";

const SPACE = 2 ** 8;
const dummyScope = Object.assign([], { ___id: 0 }) as any;
function dummyFunction() {}

function ordered(queue, run) {
  runWithScope(
    () => {
      for (let i = 0; i < 10000; i++) {
        const priority = i * SPACE;
        queue(dummyFunction, priority);
      }
      run();
    },
    0,
    dummyScope
  );
}

function tiered(queue, run) {
  runWithScope(
    () => {
      for (let i = 0; i < 10000; i++) {
        const priority = ((i % 1000) * 10 + Math.floor(i / 1000)) * SPACE;
        queue(dummyFunction, priority);
      }
      run();
    },
    0,
    dummyScope
  );
}

function reverse(queue, run) {
  runWithScope(
    () => {
      for (let i = 9999; i >= 0; i--) {
        const priority = i * SPACE;
        queue(dummyFunction, priority);
      }
      run();
    },
    0,
    dummyScope
  );
}

const suite = new Benchmark.Suite();

[ordered, tiered, reverse].forEach((exec) => {
  suite.add(`queue-heap-${exec.name}`, () => exec(queueHeap, runHeap));
  suite.add(`queue-sorted-insert-${exec.name}`, () =>
    exec(queueSortedInsert, runSortedInsert)
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
