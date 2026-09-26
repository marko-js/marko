# Render
```html
<button />
loading
```

# Update
```js
new Promise((r) => setTimeout(r, 50));
```

# Update
```html
<button />
<p>
  7
</p>
<span>
  1
</span>
```
## Change
```
INSERT: p::text("7")
INSERT: span::text("1")
REMOVE: ::text("loading")
INSERT: button + :is(p, span)
UPDATE: p::text "3" => "7"
```
## Console
```
LOG "e5"
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
  1
</span>
```
## Change
```
UPDATE: p::text "7" => "8"
```
