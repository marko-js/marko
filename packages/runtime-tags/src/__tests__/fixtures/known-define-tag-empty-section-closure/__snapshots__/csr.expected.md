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
  <!---->
  <!---->
  <!---->
  <div>
    123
  </div>
  <!---->
  <!---->
  <!---->
</div>
```

# Mutations
```
INSERT div/#comment0, div/#comment1, div/#comment2, #text, div/#comment3, div/#comment4, div/#comment5
REMOVE #text after div/#comment5
INSERT div/div
REMOVE #text after div/div
UPDATE div/div/#text " " => "123"
```