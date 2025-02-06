# Render
```html
<div
  data-children="1"
>
  Before Child
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
  Before ChildChild
</div>
```

# Mutations
```
UPDATE div[data-children] "1" => "2"
INSERT div/#text2
```