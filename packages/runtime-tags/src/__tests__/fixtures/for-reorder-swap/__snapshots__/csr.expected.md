# Render `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"},{"id":4,"text":"d"}]}`

```html
<div>
  <span>
    a
  </span>
  <span>
    b
  </span>
  <span>
    c
  </span>
  <span>
    d
  </span>
</div>
```

# Mutations
```
INSERT div
```

# Render `{"children":[{"id":4,"text":"d"},{"id":2,"text":"b"},{"id":3,"text":"c"},{"id":1,"text":"a"}]}`

```html
<div>
  <span>
    d
  </span>
  <span>
    b
  </span>
  <span>
    c
  </span>
  <span>
    a
  </span>
</div>
```

# Mutations
```
REMOVE div/span3 before div/span1
INSERT div/span3
REMOVE div/span0 after div/span2
INSERT div/span0
```

# Render `{"children":[{"id":4,"text":"d"},{"id":3,"text":"c"},{"id":2,"text":"b"},{"id":1,"text":"a"}]}`

```html
<div>
  <span>
    d
  </span>
  <span>
    c
  </span>
  <span>
    b
  </span>
  <span>
    a
  </span>
</div>
```

# Mutations
```
REMOVE div/span1 after div/span2
INSERT div/span1
```