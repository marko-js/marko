# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<p>
  f:b
</p>
<button>
  set
</button>
```
## Change
```
INSERT: p, button
UPDATE: p::text " " => "f:b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  set
</p>
<button>
  set
</button>
```
## Change
```
UPDATE: p::text "f:b" => "set"
```
