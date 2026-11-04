# Render `{"x":"x","label":"a"}`
```html
<p>
  0xa
</p>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1xa
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0xa" => "1xa"
```
