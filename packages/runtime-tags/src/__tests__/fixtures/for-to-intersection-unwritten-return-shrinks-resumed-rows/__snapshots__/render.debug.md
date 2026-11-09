# Render `{"short":false}`
```html
<span>
  a
</span>
<span>
  b
</span>
<span>
  c
</span>
<button>
  go
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  z
</span>
<button>
  go
</button>
```
## Change
```
REMOVE: span + span
REMOVE: span + span
UPDATE: span::text "a" => "z"
```
