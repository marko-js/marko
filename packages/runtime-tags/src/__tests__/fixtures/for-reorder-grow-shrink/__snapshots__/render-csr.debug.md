# Render `{"children":[]}`
```html
<div />
```

# Update `{"children":[{"id":1,"text":"a"}]}`
```html
<div>
  <span
    id="1"
  >
    a
  </span>
</div>
```
## Change
```
INSERT: div > #1
```

# Update `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}`
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
## Change
```
INSERT: #1 + #2
INSERT: #2 + #3
```

# Update `{"children":[{"id":2,"text":"b"}]}`
```html
<div>
  <span
    id="2"
  >
    b
  </span>
</div>
```
## Change
```
REMOVE: div > #1
REMOVE: #2 + #3
```

# Update `{"children":[{"id":4,"text":"d"},{"id":2,"text":"b"},{"id":5,"text":"e"}]}`
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
## Change
```
INSERT: #2 + #5
INSERT: div > #4
```

# Update `{"children":[]}`
```html
<div />
```
## Change
```
REMOVE: div > :is(#4, #2, #5)
```

# Update `{"children":[{"id":6,"text":"f"},{"id":7,"text":"g"}]}`
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
## Change
```
INSERT: div > #6
INSERT: #6 + #7
```
