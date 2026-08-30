"use strict";

// Some runs pin memory per fixture (precise coverage keeps every counted script
// alive): past the budget, unstarted suites go to a fresh process.
// Suites run in a fixed order, so the handoff is just how many are finished.
const fs = require("fs");
const v8 = require("v8");
const { PerformanceObserver, constants } = require("perf_hooks");

const RECYCLE_EXIT_CODE = 75;
const skipped = Number(process.env.MARKO_TEST_SKIPPED) || 0;
const heapBudget = v8.getHeapStatistics().heap_size_limit / 2;
const rssBudget = Number(process.env.MARKO_TEST_WORKER_MEM) || Infinity;
// Pruning stale snapshots needs one complete run, so an update never hands off.
const canRecycle = !process.env.UPDATE_EXPECTATIONS;
let liveHeap = 0;
let recycling = false;
let current;
let running = false;
let seen = 0;
let ran = 0;

// The heap is mostly garbage between collections, so only its size right after
// a major GC says what the process is actually keeping.
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.detail?.kind === constants.NODE_PERFORMANCE_GC_MAJOR) {
      liveHeap = v8.getHeapStatistics().used_heap_size;
    }
  }
}).observe({ entryTypes: ["gc"] });

exports.mochaHooks = {
  beforeEach() {
    const suite = this.currentTest.parent;
    if (suite !== current) {
      current = suite;
      running = ++seen > skipped && !recycling;
      if (running) ran++;
    }
    if (!running) this.skip();
  },
  afterEach() {
    if (
      running &&
      canRecycle &&
      (liveHeap > heapBudget || process.memoryUsage.rss() > rssBudget)
    ) {
      recycling = true;
    }
  },
};

process.on("exit", () => {
  if (!recycling || !ran) return;
  // Written synchronously (mocha's --exit would drop a buffered pipe write),
  // and the exit code makes a lost marker fail the run instead of skipping it.
  fs.writeSync(1, `\nMARKO_TEST_RECYCLE ${skipped + ran}\n`);
  process.exitCode = RECYCLE_EXIT_CODE;
});
