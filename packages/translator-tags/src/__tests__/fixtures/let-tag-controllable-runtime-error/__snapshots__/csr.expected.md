# Render {}
```html
<button
  id="inc"
>
  1|1
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
inserted button0, button1
```


# Render 
container.querySelector("#inc").click()

```html
<button
  id="inc"
>
  3|3
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
button0/#text0: "1" => "3"
button0/#text2: "1" => "3"
```


# Render 
container.querySelector("#inc").click()

```html
<button
  id="inc"
>
  5|5
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
button0/#text0: "3" => "5"
button0/#text2: "3" => "5"
```


# Render 
container.querySelector("#toggle").click()

# Error
```
Error: Change handler '_y_change' cannot change from a function to null
    at _y_change (/packages/runtime-tags/src/dom/signals.ts:55:19)
    at /packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-runtime-error/template.marko:5:11
    at signal (/packages/runtime-tags/src/dom/signals.ts:95:13)
    at runBatch (/packages/runtime-tags/src/dom/queue.ts:107:5)
    at run (/packages/runtime-tags/src/dom/queue.ts:52:5)
    at csr (/packages/translator-tags/src/__tests__/main.test.ts:283:17)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at /packages/translator-tags/src/__tests__/main.test.ts:370:37
    at resolveFixture (/node_modules/mocha-snap/dist/util/resolve-fixture.js:64:16)
    at snap (/node_modules/mocha-snap/dist/snap.js:46:20)
```