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

# Render `{"children":[{"id":5,"text":"e"},{"id":4,"text":"d"},{"id":3,"text":"c"},{"id":2,"text":"b"},{"id":1,"text":"a"}]}`

```html
<div>
  <span
    id="5"
  >
    e
  </span>
  <span
    id="4"
  >
    d
  </span>
  <span
    id="3"
  >
    c
  </span>
  <span
    id="2"
  >
    b
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
REMOVE div/span3 after div/span4
INSERT div/span3
REMOVE div/span2 after div/span4
INSERT div/span2
REMOVE div/span1 after div/span4
INSERT div/span1
REMOVE div/span0 after div/span4
INSERT div/span0
```

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
REMOVE div/span3 after div/span4
INSERT div/span3
REMOVE div/span2 after div/span4
INSERT div/span2
REMOVE div/span1 after div/span4
INSERT div/span1
REMOVE div/span0 after div/span4
INSERT div/span0
```