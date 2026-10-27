# Render `{"x":1,"y":"y"}`
```html
<button
  class="s"
>
  s
</button>
Ay
```

# Update `{"x":2,"y":"y"}`

# Update
```js
d.querySelector(".s").click();
```

# Update `{"x":1,"y":"z"}`
```html
<button
  class="s"
>
  s
</button>
Az
```
## Change
```
UPDATE: ::text@1 "y" => "z"
```

# Update
```js
d.querySelector(".s").click();
```

# Update `{"x":2,"y":"z"}`
