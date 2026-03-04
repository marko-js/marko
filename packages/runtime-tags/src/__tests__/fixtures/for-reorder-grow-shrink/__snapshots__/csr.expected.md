# Render `{"children":[]}`

```html
<div />
```

# Mutations
```
INSERT div
```

# Render `{"children":[{"id":1,"text":"a"}]}`

```html
<div>
  <span
    id="1"
  >
    a
  </span>
</div>
```

# Mutations
```
INSERT div/span
```

# Render `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}`

```html
<div>
  <span
    id="1"
  >
    a
  </span>
  <span
    id="2"
  >
    b
  </span>
  <span
    id="3"
  >
    c
  </span>
</div>
```

# Mutations
```
INSERT div/span1
INSERT div/span2
```

# Render `{"children":[{"id":2,"text":"b"}]}`

```html
<div>
  <span
    id="2"
  >
    b
  </span>
</div>
```

# Mutations
```
REMOVE span before div/span
REMOVE span after div/span
```

# Render `{"children":[{"id":4,"text":"d"},{"id":2,"text":"b"},{"id":5,"text":"e"}]}`

```html
<div>
  <span
    id="4"
  >
    d
  </span>
  <span
    id="2"
  >
    b
  </span>
  <span
    id="5"
  >
    e
  </span>
</div>
```

# Mutations
```
INSERT div/span2
INSERT div/span0
```

# Render `{"children":[]}`

```html
<div />
```

# Mutations
```
REMOVE span, span, span in div
```

# Render `{"children":[{"id":6,"text":"f"},{"id":7,"text":"g"}]}`

```html
<div>
  <span
    id="6"
  >
    f
  </span>
  <span
    id="7"
  >
    g
  </span>
</div>
```

# Mutations
```
INSERT div/span0
INSERT div/span1
```