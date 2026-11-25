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

# Update `{"children":[{"id":4,"text":"d"},{"id":2,"text":"b"},{"id":3,"text":"c"},{"id":1,"text":"a"}]}`
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
## Change
```
REMOVE: div > span
REMOVE: div > span
INSERT: div > span:nth-of-type(1)
INSERT: div > span:nth-of-type(4)
```

# Update `{"children":[{"id":4,"text":"d"},{"id":3,"text":"c"},{"id":2,"text":"b"},{"id":1,"text":"a"}]}`
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
## Change
```
REMOVE: div > span
INSERT: div > span:nth-of-type(2)
```
