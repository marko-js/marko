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
REMOVE: ::text("loading")
INSERT: div
INSERT: div::text("no query")
UPDATE: div::text "found a" => "no query"
```
