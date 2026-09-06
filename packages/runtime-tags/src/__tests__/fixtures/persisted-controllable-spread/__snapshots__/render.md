# Render `{"attrs":{"placeholder":"p1"}}`
```html
<input
  placeholder="p1"
  value="a"
/>
<p>
  a
</p>
```

# Update `{"attrs":{"placeholder":"p2"}}`
```html
<input
  placeholder="p2"
  value="a"
/>
<p>
  a
</p>
```
## Change
```
UPDATE: input[placeholder] "p1" => "p2"
```

# Update
```js
const el = document.querySelector("input");
el.value = "typed";
el.dispatchEvent(new (el.ownerDocument.defaultView).Event("input"));
```
```html
<input
  default-value="a"
  placeholder="p2"
  value="typed"
/>
<p>
  typed
</p>
```
## Change
```
UPDATE: p::text "a" => "typed"
```

# Update `{"attrs":{"placeholder":"p3","data-x":1}}`
```html
<input
  data-x="1"
  default-value="a"
  placeholder="p3"
  value="typed"
/>
<p>
  typed
</p>
```
## Change
```
UPDATE: input[placeholder] "p2" => "p3"
UPDATE: input[data-x] null => "1"
```
