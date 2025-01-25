# Render `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}`

```html
<div>
  abc
</div>
```

# Mutations
```
INSERT div
```

# Render `{"children":[{"id":1,"text":"a"},{"id":3,"text":"c"}]}`

```html
<div>
  ac
</div>
```

# Mutations
```
REMOVE #text after div/#text0
```

# Render `{"children":[{"id":4,"text":"d"},{"id":3,"text":"c"}]}`

```html
<div>
  dc
</div>
```

# Mutations
```
REMOVE #text before div/#text1
INSERT div/#text0
```