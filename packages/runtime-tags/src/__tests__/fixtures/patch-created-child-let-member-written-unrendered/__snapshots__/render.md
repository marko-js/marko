# Render `{"show":false,"label":"a","n":1}`

# Update `{"show":true,"label":"b","n":2}`
```html
<p>
  2 -
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
  2 b
</p>
<button>
  show
</button>
```
## Change
```
UPDATE: p::text@2 "-" => "b"
```
