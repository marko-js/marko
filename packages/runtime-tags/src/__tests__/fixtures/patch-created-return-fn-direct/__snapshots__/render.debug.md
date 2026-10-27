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
