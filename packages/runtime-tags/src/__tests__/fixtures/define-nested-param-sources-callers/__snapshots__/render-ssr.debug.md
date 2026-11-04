# Render `{"a":"x","label":"a"}`
```html
<p>
  ax0
</p>
<p>
  a00
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
  ax0
</p>
<p>
  a01
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "a00" => "a01"
```
