# Render `{"label":"a"}`
```html
<button>
  f:a
</button>
<em>
  a
</em>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  x
</button>
```
## Change
```
UPDATE: button::text "f:a" => "x"
REMOVE: button + em
```
