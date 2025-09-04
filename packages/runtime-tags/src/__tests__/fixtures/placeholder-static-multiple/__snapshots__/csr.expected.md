# Render
```html
<div />
```

# Mutations
```
INSERT div
```

# Render ASYNC
```html
<div>
  ABCD
</div>
```

# Mutations
```
INSERT div/#text0, div/#text1, div/#text2
UPDATE div/#text1 "" => "C"
```