# Render `{"field":{"value":"a","placeholder":"p1"}}`
```html
<input
  placeholder="p1"
  type="text"
  value="a"
/>
<p />
```

# Update
```js
const el = document.querySelector("input");
el.value = "typed";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```
```html
<input
  placeholder="p1"
  type="text"
  value="a"
/>
<p>
  typed
</p>
```
## Change
```
UPDATE: p::text "" => "typed"
```

# Update
```js
document.querySelector("p").textContent =
`live:${document.querySelector("input") .value}`;
```
```html
<input
  placeholder="p1"
  type="text"
  value="a"
/>
<p>
  live:a
</p>
```
## Change
```
REMOVE: p::text("typed")
INSERT: p::text("live:a")
```

# Update `{"field":{"value":"a","placeholder":"p2"}}`
```html
<input
  placeholder="p2"
  type="text"
  value="a"
/>
<p>
  live:a
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
  placeholder="p2"
  type="text"
  value="a"
/>
<p>
  live:a
</p>
```
## Change
```
REMOVE: p::text("live:a")
INSERT: p::text("live:a")
```

# Update `{"field":{"value":"b","placeholder":"p2"}}`

# Update
```js
document.querySelector("p").textContent =
`live:${document.querySelector("input") .value}`;
```
```html
<input
  default-value="a"
  placeholder="p2"
  type="text"
  value="b"
/>
<p>
  live:b
</p>
```
## Change
```
REMOVE: p::text("live:a")
INSERT: p::text("live:b")
```
