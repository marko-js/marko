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
  class="placeholder"
>
  0
</button>
```
## Change
```
INSERT: .placeholder
UPDATE: .placeholder::text " " => "0"
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
INSERT: .child
```

# Update
```html
done
```
## Change
```
INSERT: ::text("done")
REMOVE: ::text + button
REMOVE: ::text + button
```
