# Render
```html
<div
  data-children="1"
>
  <div />
</div>
```

# Mutations
```
INSERT div
```

# Render ASYNC
```html
<div
  data-children="2"
>
  <div />
  <div />
</div>
```

# Mutations
```
UPDATE div[data-children] "1" => "2"
INSERT div/div1
```