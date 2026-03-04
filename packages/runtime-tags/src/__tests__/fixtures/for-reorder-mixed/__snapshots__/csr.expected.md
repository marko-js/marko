# Render `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"},{"id":4,"text":"d"},{"id":5,"text":"e"}]}`

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
  <span
    id="4"
  >
    d
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
INSERT div
```

# Render `{"children":[{"id":5,"text":"e"},{"id":6,"text":"x"},{"id":1,"text":"a"},{"id":3,"text":"c"}]}`

```html
<div>
  <span
    id="5"
  >
    e
  </span>
  <span
    id="6"
  >
    x
  </span>
  <span
    id="1"
  >
    a
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
REMOVE span after div/span2
REMOVE span after div/span3
INSERT div/span1
REMOVE div/span0 after div/span3
INSERT div/span0
```

# Render `{"children":[{"id":7,"text":"p"},{"id":5,"text":"e"},{"id":8,"text":"q"},{"id":3,"text":"c"},{"id":9,"text":"r"},{"id":1,"text":"a"}]}`

```html
<div>
  <span
    id="7"
  >
    p
  </span>
  <span
    id="5"
  >
    e
  </span>
  <span
    id="8"
  >
    q
  </span>
  <span
    id="3"
  >
    c
  </span>
  <span
    id="9"
  >
    r
  </span>
  <span
    id="1"
  >
    a
  </span>
</div>
```

# Mutations
```
REMOVE span after div/span1
INSERT div/span4
REMOVE div/span3 after div/span5
INSERT div/span3
INSERT div/span2
INSERT div/span0
```