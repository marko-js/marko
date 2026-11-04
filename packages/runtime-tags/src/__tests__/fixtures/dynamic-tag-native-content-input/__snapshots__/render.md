# Render `{"card":true,"label":"a","tags":["x"]}`
```html
<button>
  0
</button>
<p>
  x
  <em>
    a 0
  </em>
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  x
  <em>
    a 1
  </em>
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: p > em::text@2 "0" => "1"
```
