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
  queue as queueDumb,
  run as runDumb,
} from "../packages/runtime/src/dom/queue-dumb";

const SPACE = 1; //2 ** 8;
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

const suite = new Benchmark.Suite();

[ordered, tiered, reverse].forEach((exec) => {
  suite.add(`queue-heap-${exec.name}`, () => exec(queueHeap, runHeap));
  suite.add(`queue-heap-2-${exec.name}`, () => exec(queueHeap2, runHeap2));
  suite.add(`queue-sorted-insert-${exec.name}`, () =>
    exec(queueSortedInsert, runSortedInsert)
  );
  suite.add(`queue-dumb-${exec.name}`, () => exec(queueDumb, runDumb));
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
