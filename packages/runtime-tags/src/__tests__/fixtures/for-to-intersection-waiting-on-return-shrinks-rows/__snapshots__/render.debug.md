# Render
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
REMOVE: span
REMOVE: span
UPDATE: span::text "a" => "z"
```
