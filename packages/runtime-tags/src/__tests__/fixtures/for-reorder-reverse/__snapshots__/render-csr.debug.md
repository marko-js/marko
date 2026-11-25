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
REMOVE: div > #2
REMOVE: div > #3
REMOVE: div > #4
REMOVE: div > #5
INSERT: #5
INSERT: #4
INSERT: #3
INSERT: #2
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
REMOVE: div > #1
REMOVE: div > #2
REMOVE: div > #3
REMOVE: div > #4
INSERT: #1
INSERT: #2
INSERT: #3
INSERT: #4
```
