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

# Render `{"children":[{"id":2,"text":"b"},{"id":3,"text":"c"},{"id":1,"text":"a"}]}`

```html
<div>
  bca
</div>
```

# Mutations
```
REMOVE div/#text2 before div/#text0
INSERT div/#text2
```

# Render `{"children":[]}`

```html
<div />
```

# Mutations
```
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text in div
```