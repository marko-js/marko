# Render `{"rest":{"placeholder":"p1"}}`
```html
<input
  placeholder="p1"
  value="init"
/>
<p>
  init
</p>
```

# Update
```js
const el = document.querySelector("input");
el.value = "typed";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```
```html
<input
  default-value="init"
  placeholder="p1"
  value="typed"
/>
<p>
  typed
</p>
```
## Change
```
UPDATE: p::text "init" => "typed"
```

# Update `{"rest":{"placeholder":"p2"}}`
```html
<input
  default-value="init"
  placeholder="p2"
  value="typed"
/>
<p>
  typed
</p>
```
## Change
```
UPDATE: input[placeholder] "p1" => "p2"
```

# Update
```js
document.querySelector("p").textContent =
`live:${document.querySelector("input") .value}`;
```
```html
<input
  default-value="init"
  placeholder="p2"
  value="typed"
/>
<p>
  live:typed
</p>
```
## Change
```
REMOVE: p::text("typed")
INSERT: p::text("live:typed")
```

# Update
```js
const el = document.querySelector("input");
el.value = "typed";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```

# Update
```js
document.querySelector("p").textContent =
`live:${document.querySelector("input") .value}`;
```
```html
<input
  default-value="init"
  placeholder="p2"
  value="typed"
/>
<p>
  live:typed
</p>
```
## Change
```
REMOVE: p::text("live:typed")
INSERT: p::text("live:typed")
```
