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
INSERT: ::text("a")
REMOVE: ::text + ::text("outer")
```

# Update
```html
ab
```
## Change
```
INSERT: ::text@0 + ::text("b")
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
INSERT: ::text@1 + .placeholder
UPDATE: .placeholder::text " " => "0"
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
INSERT: ::text@1 + .child
```

# Update
```html
abc
```
## Change
```
INSERT: ::text@1 + ::text("c")
REMOVE: ::text@2 + button
REMOVE: ::text@2 + button
```
