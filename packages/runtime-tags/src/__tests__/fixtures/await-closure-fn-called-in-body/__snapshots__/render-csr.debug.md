# Render

# Update
```html
loading
```
## Change
```
INSERT: ::text("loading")
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
INSERT: p, button
REMOVE: button + ::text("loading")
UPDATE: button::text " " => "0"
UPDATE: p::text " " => "0"
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
