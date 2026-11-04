# Render `{"step":1,"label":"a"}`
```html
<button>
  a
</button>
<p>
  0
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  a
</button>
<p>
  1
</p>
```
## Change
```
UPDATE: p::text "0" => "1"
```
