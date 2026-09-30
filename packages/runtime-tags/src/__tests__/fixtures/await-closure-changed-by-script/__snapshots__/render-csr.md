# Render
```html
<button />
```

# Update
```js
new Promise((r) => setTimeout(r, 50));
```
```html
<button />
<p>
  7
</p>
<span>
  5
</span>
```
## Change
```
INSERT: button + ::text("loading")
INSERT: button + :is(p, span)
REMOVE: span + ::text("loading")
```
## Console
```
LOG "e5"
```

# Update `click("button")`
```html
<button />
<p>
  8
</p>
<span>
  5
</span>
```
## Change
```
UPDATE: p::text "7" => "8"
```
