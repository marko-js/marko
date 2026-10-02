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
INSERT: .child + .placeholder
UPDATE: .placeholder::text " " => "0"
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
INSERT: .child + ::text("done")
REMOVE: ::text + button
```
