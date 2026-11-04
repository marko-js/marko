# Render `{"show":true,"p":{"value":"b"}}`
```html
<button
  class="toggle"
>
  toggle
</button>
<p>
  1
</p>
```

# Update
```js
document.querySelector(".toggle").click();
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<p>
  1
</p>
<p>
  b
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + p
INSERT: p:nth-of-type(2)::text("b")
```
