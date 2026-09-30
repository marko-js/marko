# Render
```html
<button
  id="toggle"
>
  toggle
</button>
<section>
  <span>
    x
  </span>
</section>
```

# Update
```html
<button
  id="toggle"
>
  toggle
</button>
<section>
  <span>
    x
  </span>
</section>
<span>
  y
</span>
```
## Change
```
INSERT: section + span
INSERT: span::text("x")
REMOVE: span::text("x")
INSERT: span::text("y")
```

# Update
```js
document.body.click();
```
