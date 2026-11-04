# Render `{"label":"a"}`
```html
<p>
  0a
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
  1a
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0a" => "1a"
```
