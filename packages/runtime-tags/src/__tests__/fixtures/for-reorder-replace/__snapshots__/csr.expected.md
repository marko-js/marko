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
INSERT div
```

# Render `{"children":[{"id":10,"text":"x"},{"id":11,"text":"y"},{"id":12,"text":"z"}]}`

```html
<div>
  <span
    id="10"
  >
    x
  </span>
  <span
    id="11"
  >
    y
  </span>
  <span
    id="12"
  >
    z
  </span>
</div>
```

# Mutations
```
REMOVE span, span, span in div
INSERT div/span0
INSERT div/span1
INSERT div/span2
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
REMOVE span, span, span in div
INSERT div/span0
INSERT div/span1
INSERT div/span2
```

# Render `{"children":[{"id":20,"text":"only"}]}`

```html
<div>
  <span
    id="20"
  >
    only
  </span>
</div>
```

# Mutations
```
REMOVE span, span, span in div
INSERT div/span
```

# Render `{"children":[{"id":30,"text":"p"},{"id":31,"text":"q"},{"id":32,"text":"r"},{"id":33,"text":"s"},{"id":34,"text":"t"}]}`

```html
<div>
  <span
    id="30"
  >
    p
  </span>
  <span
    id="31"
  >
    q
  </span>
  <span
    id="32"
  >
    r
  </span>
  <span
    id="33"
  >
    s
  </span>
  <span
    id="34"
  >
    t
  </span>
</div>
```

# Mutations
```
REMOVE span in div
INSERT div/span0
INSERT div/span1
INSERT div/span2
INSERT div/span3
INSERT div/span4
```