# Render
```html
outer
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
REMOVE: ::text("outer")
INSERT: ::text("a"), ::text("b"), .child, .placeholder
INSERT: .child::text("0")
INSERT: .placeholder::text("0")
```

# Update
```js
document.querySelector(`.${name}`)?.click();
```
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
  1
</button>
```
## Change
```
UPDATE: .placeholder::text "0" => "1"
```

# Update
```js
document.querySelector(`.${name}`)?.click();
```
```html
ab
<button
  class="child"
>
  1
</button>
<button
  class="placeholder"
>
  1
</button>
```
## Change
```
UPDATE: .child::text "0" => "1"
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
