# Render
```html
<button>
  a
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b
</button>
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
<div>
  no query
</div>
```
## Change
```
UPDATE: button::text "b" => ""
INSERT: button + div
UPDATE: div::text " " => "no query"
```
