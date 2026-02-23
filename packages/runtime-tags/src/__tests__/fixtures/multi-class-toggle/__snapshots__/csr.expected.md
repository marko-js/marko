# Render
```html
<button
  class="a b c"
>
  0
</button>
```

# Mutations
```
INSERT button
```

# Render
```js
container.querySelector("button").click();
```
```html
<button
  class="a b c d e f"
>
  1
</button>
```

# Mutations
```
UPDATE button[class] "a b c" => "a b c d e f"
UPDATE button/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button
  class="a b c"
>
  2
</button>
```

# Mutations
```
UPDATE button[class] "a b c d e f" => "a b c"
UPDATE button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button
  class="a b c d e f"
>
  3
</button>
```

# Mutations
```
UPDATE button[class] "a b c" => "a b c d e f"
UPDATE button/#text "2" => "3"
```