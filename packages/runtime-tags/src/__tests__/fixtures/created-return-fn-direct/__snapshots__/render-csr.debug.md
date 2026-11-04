# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<p>
  f:b -
</p>
<button>
  show
</button>
```
## Change
```
INSERT: p, button
UPDATE: p::text@0 "" => "f:b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  f:b f:b
</p>
<button>
  show
</button>
```
## Change
```
UPDATE: p::text@4 "-" => "f:b"
```
