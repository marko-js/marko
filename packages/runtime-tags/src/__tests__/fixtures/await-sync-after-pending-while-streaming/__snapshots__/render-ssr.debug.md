# Render
```html
<button>
  a
</button>
loading
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b
</button>
loading
```
## Change
```
UPDATE: button::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button />
loading
```
## Change
```
UPDATE: button::text "b" => ""
```

# Update
```html
<button />
<div>
  no query
</div>
```
## Change
```
INSERT: div::text("no query")
REMOVE: ::text("loading")
INSERT: button + div
UPDATE: div::text "found a" => "no query"
```
