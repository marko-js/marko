# Render

# Update
```html
outer
```
## Change
```
INSERT: ::text("outer")
```

# Update
```html
a
```
## Change
```
REMOVE: ::text("outer")
INSERT: ::text("a")
```

# Update
```html
ab
```
## Change
```
INSERT: ::text("b")
UPDATE: ::text@1 "" => "b"
```

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
ab
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
ab
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
abc
```
## Change
```
REMOVE: button
REMOVE: button
INSERT: ::text("c")
```
