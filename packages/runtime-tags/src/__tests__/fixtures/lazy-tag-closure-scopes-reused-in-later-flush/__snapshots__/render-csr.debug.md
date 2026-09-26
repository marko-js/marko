# Render

# Update
```js
document.body.click();
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
```
## Change
```
INSERT: #toggle, section
INSERT: section > span
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
  x
</span>
```
## Change
```
INSERT: section + span
```
