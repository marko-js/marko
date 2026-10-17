# Render `{"children":{"1":"a","2":"b","3":"c"}}`
```html
<div>
  <p>
    1: a
  </p>
  <p>
    2: b
  </p>
  <p>
    3: c
  </p>
  <p>
    1
  </p>
  <p>
    2
  </p>
  <p>
    3
  </p>
</div>
```

# Update `{"children":{}}`
```html
<div />
```
## Change
```
REMOVE: div > p
REMOVE: div > p
REMOVE: div > p
REMOVE: div > p
REMOVE: div > p
REMOVE: div > p
```

# Update `{"children":{"1":"a","2":"b","3":"c"}}`
```html
<div>
  <p>
    1: a
  </p>
  <p>
    2: b
  </p>
  <p>
    3: c
  </p>
  <p>
    1
  </p>
  <p>
    2
  </p>
  <p>
    3
  </p>
</div>
```
## Change
```
INSERT: div > p
INSERT: div > p:nth-of-type(1) + p
INSERT: div > p:nth-of-type(2) + p
INSERT: div > p:nth-of-type(3) + p
INSERT: div > p:nth-of-type(4) + p
INSERT: div > p:nth-of-type(5) + p
```
