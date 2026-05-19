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

# Update `{"children":[{"id":5,"text":"e"},{"id":6,"text":"x"},{"id":1,"text":"a"},{"id":3,"text":"c"}]}`
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
## Change
```
REMOVE: #1 + #2
REMOVE: #3 + #4
INSERT: div > #6
REMOVE: #3 + #5
INSERT: div > #5
```

# Update `{"children":[{"id":7,"text":"p"},{"id":5,"text":"e"},{"id":8,"text":"q"},{"id":3,"text":"c"},{"id":9,"text":"r"},{"id":1,"text":"a"}]}`
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
## Change
```
REMOVE: #5 + #6
INSERT: #5 + #9
REMOVE: #1 + #3
INSERT: #5 + #3
INSERT: #5 + #8
INSERT: div > #7
```
