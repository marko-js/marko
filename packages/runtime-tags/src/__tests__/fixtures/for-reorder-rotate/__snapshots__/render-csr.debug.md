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

# Update `{"children":[{"id":5,"text":"e"},{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"},{"id":4,"text":"d"}]}`
```html
<div>
  <span
    id="5"
  >
    e
  </span>
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
</div>
```
## Change
```
REMOVE: #4 + #5
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
REMOVE: div > #5
INSERT: #4 + #5
```

# Update `{"children":[{"id":4,"text":"d"},{"id":5,"text":"e"},{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}`
```html
<div>
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
## Change
```
REMOVE: #4 + #5
INSERT: div > #5
REMOVE: #3 + #4
INSERT: div > #4
```
