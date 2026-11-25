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
REMOVE: em
UPDATE: button::text "f:a" => "x"
```
