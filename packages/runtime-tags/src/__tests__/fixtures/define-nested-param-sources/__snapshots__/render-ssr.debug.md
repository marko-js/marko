# Render `{"a":"x","label":"a"}`
```html
<p>
  ax0
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
  ax1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "ax0" => "ax1"
```
