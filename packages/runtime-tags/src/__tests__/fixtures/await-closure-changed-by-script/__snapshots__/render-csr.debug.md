# Render `{"show":true}`
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
<b>
  5 5
</b>
```
## Change
```
INSERT: button + ::text("loading")
INSERT: button + :is(p, span, b)
REMOVE: b + ::text("loading")
```
## Console
```
LOG "e5"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button />
<p>
  8
</p>
<span>
  5
</span>
<b>
  5 5
</b>
```
## Change
```
UPDATE: p::text "7" => "8"
```
