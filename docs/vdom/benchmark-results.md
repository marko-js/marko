Benchmark Results
=================

Setup:

- MacBook Pro (Retina, 15-inch, Mid 2014)
    - OS X 10.11.6
    - 2.8 GHz Intel Core i7
    - 16 GB 1600 MHz DDR3
- Google Chrome - version 53.0.2785.101 (64-bit)
- Firefox - version 48.0.2
- Safari - version 9.1.3 (11601.7.8)
- Safari Mobile on iPhone 6 - iOS version 10.0.1

# DOM creation

## Google Chrome

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

## Safari

```text
Running "create-todomvc"...
dom x 6,040 ops/sec ±5.42% (34 runs sampled)
dom-innerHTML x 5,715 ops/sec ±1.87% (33 runs sampled)
marko-vdom x 12,032 ops/sec ±19.74% (43 runs sampled)
react x 20,242 ops/sec ±3.02% (47 runs sampled)
Fastest is react

--------------

Running "create-marko-docs"...
dom x 472 ops/sec ±37.90% (48 runs sampled)
dom-innerHTML x 719 ops/sec ±3.57% (49 runs sampled)
marko-vdom x 389 ops/sec ±145.42% (20 runs sampled)
react x 1,324 ops/sec ±29.80% (50 runs sampled)
Fastest is react

--------------

Running "create-tabs"...
dom x 30,399 ops/sec ±53.42% (47 runs sampled)
dom-innerHTML x 29,246 ops/sec ±1.71% (59 runs sampled)
marko-vdom x 51,313 ops/sec ±0.80% (62 runs sampled)
react x 84,233 ops/sec ±1.53% (61 runs sampled)
Fastest is react
```

## Safari (mobile)

```text
Running "create-todomvc"...
dom x 2,040 ops/sec ±10.62% (52 runs sampled)
dom-innerHTML x 1,510 ops/sec ±0.89% (59 runs sampled)
marko-vdom x 7,684 ops/sec ±85.15% (27 runs sampled)
react x 10,823 ops/sec ±2.52% (48 runs sampled)
Fastest is react

--------------

Running "create-marko-docs"...
dom x 322 ops/sec ±13.83% (45 runs sampled)
dom-innerHTML x 183 ops/sec ±0.92% (55 runs sampled)
marko-vdom x 382 ops/sec ±113.12% (23 runs sampled)
react x 435 ops/sec ±73.52% (35 runs sampled)
Fastest is react

--------------

Running "create-tabs"...
dom x 14,919 ops/sec ±15.37% (48 runs sampled)
dom-innerHTML x 7,738 ops/sec ±0.78% (60 runs sampled)
marko-vdom x 70,597 ops/sec ±7.10% (33 runs sampled)
react x 50,685 ops/sec ±1.82% (55 runs sampled)
Fastest is marko-vdom
```

# DOM Tree Walking

## Google Chrome

```text
real DOM x 5,060 ops/sec ±1.95% (58 runs sampled)
marko-vdom x 15,145 ops/sec ±1.66% (57 runs sampled)
Fastest is marko-vdom
```

## Firefox

```text
real DOM x 2,775 ops/sec ±5.48% (48 runs sampled)
marko-vdom x 8,027 ops/sec ±3.93% (41 runs sampled)
Fastest is marko-vdom
```

## Safari

```text
real DOM x 3,005 ops/sec ±2.25% (52 runs sampled)
marko-vdom x 5,509 ops/sec ±2.32% (32 runs sampled)
Fastest is marko-vdom
```

## Safari (mobile)

```text
real DOM x 1,295 ops/sec ±3.18% (53 runs sampled)
marko-vdom x 3,010 ops/sec ±5.57% (43 runs sampled)
Fastest is marko-vdom
```