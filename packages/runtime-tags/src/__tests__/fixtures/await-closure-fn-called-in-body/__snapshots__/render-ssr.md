# Render
```html
loading
```

# Update
```html
<p>
  0
</p>
<button>
  0
</button>
```
## Change
```
INSERT: p::text("0")
INSERT: button::text("0")
REMOVE: ::text("loading")
INSERT: p, button
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: p::text "0" => "1"
UPDATE: button::text "0" => "1"
```
