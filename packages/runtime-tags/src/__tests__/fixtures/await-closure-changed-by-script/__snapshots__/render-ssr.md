# Render `{"show":true}`
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
<b>
  5 5
</b>
```
## Change
```
INSERT: p::text("7")
INSERT: span::text("1")
INSERT: b::text("5")
INSERT: b::text@0 + ::text(" ")
INSERT: b::text@1 + ::text("5")
REMOVE: ::text("loading")
INSERT: button + :is(p, span, b)
UPDATE: b::text@2 "0" => "5"
UPDATE: b::text@0 "0" => "5"
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
<b>
  5 5
</b>
```
## Change
```
UPDATE: p::text "7" => "8"
```
