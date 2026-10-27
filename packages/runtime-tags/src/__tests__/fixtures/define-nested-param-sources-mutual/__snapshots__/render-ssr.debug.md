# Render `{"a":"x","label":"a"}`
```html
<p>
  ax0
</p>
<p>
  ax0
</p>
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
<p>
  ax1
</p>
<p>
  ax1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "ax0" => "ax1"
UPDATE: p:nth-of-type(2)::text "ax0" => "ax1"
UPDATE: p:nth-of-type(3)::text "ax0" => "ax1"
```
