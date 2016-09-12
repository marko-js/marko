Benchmark Results
=================

# DOM creation

## Google Chrome

_Version: Version 53.0.2785.101 (64-bit)_

```text
Running "create-todomvc"...
dom x 911 ops/sec ±8.12% (9 runs sampled)
dom-innerHTML x 4,310 ops/sec ±19.58% (53 runs sampled)
marko-vdom x 120,911 ops/sec ±1.77% (63 runs sampled)
react x 77,839 ops/sec ±1.00% (63 runs sampled)
Fastest is marko-vdom

--------------

Running "create-marko-docs"...
dom x 760 ops/sec ±16.98% (50 runs sampled)
dom-innerHTML x 682 ops/sec ±9.05% (54 runs sampled)
marko-vdom x 7,316 ops/sec ±4.68% (63 runs sampled)
react x 7,495 ops/sec ±2.40% (63 runs sampled)
Fastest is react,marko-vdom

--------------

Running "create-tabs"...
dom x 42,319 ops/sec ±3.97% (56 runs sampled)
dom-innerHTML x 26,290 ops/sec ±7.77% (51 runs sampled)
marko-vdom x 441,297 ops/sec ±1.79% (64 runs sampled)
react x 270,895 ops/sec ±1.35% (61 runs sampled)
Fastest is marko-vdom
```

## Firefox

```text
Running "create-todomvc"...
dom x 2,749 ops/sec ±5.61% (18 runs sampled)
dom-innerHTML x 4,539 ops/sec ±1.55% (27 runs sampled)
marko-vdom x 32,360 ops/sec ±8.96% (36 runs sampled)
react x 15,530 ops/sec ±6.16% (55 runs sampled)
Fastest is marko-vdom

--------------

Running "create-marko-docs"...
dom x 268 ops/sec ±1.18% (59 runs sampled)
dom-innerHTML x 573 ops/sec ±0.88% (59 runs sampled)
marko-vdom x 3,545 ops/sec ±3.73% (57 runs sampled)
react x 604 ops/sec ±4.64% (41 runs sampled)
Fastest is marko-vdom

--------------

Running "create-tabs"...
dom x 23,940 ops/sec ±9.70% (53 runs sampled)
dom-innerHTML x 22,090 ops/sec ±1.50% (60 runs sampled)
marko-vdom x 261,119 ops/sec ±1.51% (60 runs sampled)
react x 90,979 ops/sec ±0.72% (61 runs sampled)
Fastest is marko-vdom
```