# Render

# Update
```js
document.querySelector(`.${name}`)?.click();
```

# Update
```js
document.querySelector(`.${name}`)?.click();
```

# Update
```html
<button
  class="child"
>
  0
</button>
```
## Change
```
INSERT: .child
```

# Update
```html
<button
  class="child"
>
  0
</button>
<button
  class="placeholder"
>
  0
</button>
```
## Change
```
INSERT: .placeholder
```

# Update
```html
<button
  class="child"
>
  0
</button>
done
```
## Change
```
REMOVE: button
INSERT: ::text("done")
```
