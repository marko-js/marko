# Render `{"root":"r","rootAttrs":{"src":"/never.js"},"src":"/never.js","a":"x","attrs":{"type":"text/plain"},"external":{"src":"/never.js","type":"text/plain"}}`
```html
<main>
  <button
    class="show"
  >
    show
  </button>
  <button
    class="add"
  >
    add
  </button>
</main>
```

# Update
```js
assert.deepEqual(ran(document), ["root r", "row a"]);
```

# Update
```js
document.querySelector(".show").click();
```
```html
<main>
  <button
    class="show"
  >
    show
  </button>
  <button
    class="add"
  >
    add
  </button>
  <script
    type="text/plain"
  >
    (window.ran ||= []).push("plain")
  </script>
  <script
    type="text/plain"
  >
    (window.ran ||= []).push("spread")
  </script>
  <script
    src="/never.js"
    type="text/plain"
  />
  <script
    src="/never.js"
    type="text/plain"
  />
  <script
    src="/never.js"
    type="text/plain"
  >
    (window.ran ||= []).push("inline")
  </script>
  <script
    data-a="x"
    type="text/javascript"
  >
    (window.ran ||= []).push("both " + document.currentScript.dataset.a)
  </script>
</main>
```
## Change
```
INSERT: .add + :is(script, script, script, script, script, script)
UPDATE: main > script:nth-of-type(2)[type] null => "text/plain"
UPDATE: main > script:nth-of-type(5)[type] null => "text/plain"
UPDATE: main > script:nth-of-type(6)[data-a] null => "x"
UPDATE: main > script:nth-of-type(1)[type] null => "text/plain"
UPDATE: main > script:nth-of-type(3)[type] null => "text/plain"
UPDATE: main > script:nth-of-type(4)[type] null => "text/plain"
UPDATE: main > script:nth-of-type(6)[type] null => "text/javascript"
INSERT: main > script:nth-of-type(1)::text("(window.ran ||= []).push(\"plain\")")
INSERT: main > script:nth-of-type(2)::text("(window.ran ||= []).push(\"spread\")")
UPDATE: main > script:nth-of-type(3)[src] null => "/never.js"
UPDATE: main > script:nth-of-type(4)[src] null => "/never.js"
UPDATE: main > script:nth-of-type(5)[src] null => "/never.js"
INSERT: main > script:nth-of-type(5)::text("(window.ran ||= []).push(\"inline\")")
INSERT: main > script:nth-of-type(6)::text("(window.ran ||= []).push(\"both \" + document.currentScript.dataset.a)")
```

# Update
```js
document.querySelector(".add").click();
```

# Update
```js
assert.deepEqual(ran(document), [
"root r",
"row a",
"text/plain x",
"both x",
"row b",
  ]);
```
