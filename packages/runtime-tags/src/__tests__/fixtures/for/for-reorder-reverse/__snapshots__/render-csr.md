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

# Update `{"children":[{"id":5,"text":"e"},{"id":4,"text":"d"},{"id":3,"text":"c"},{"id":2,"text":"b"},{"id":1,"text":"a"}]}`
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
## Change
```
REMOVE: #1 + #2
INSERT: div > #2
REMOVE: #1 + #3
INSERT: div > #3
REMOVE: #1 + #4
INSERT: div > #4
REMOVE: #1 + #5
INSERT: div > #5
```

# Update `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"},{"id":4,"text":"d"},{"id":5,"text":"e"}]}`
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
## Change
```
REMOVE: #5 + #4
INSERT: div > #4
REMOVE: #5 + #3
INSERT: div > #3
REMOVE: #5 + #2
INSERT: div > #2
REMOVE: #5 + #1
INSERT: div > #1
```
