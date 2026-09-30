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

# Update `{"children":[{"id":10,"text":"x"},{"id":11,"text":"y"},{"id":12,"text":"z"}]}`
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
## Change
```
REMOVE: div > :is(#1, #2, #3)
INSERT: div > #10
INSERT: #10 + #11
INSERT: #11 + #12
UPDATE: #10[id] null => "10"
UPDATE: #11[id] null => "11"
UPDATE: #12[id] null => "12"
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
REMOVE: div > :is(#10, #11, #12)
INSERT: div > #1
INSERT: #1 + #2
INSERT: #2 + #3
UPDATE: #1[id] null => "1"
UPDATE: #2[id] null => "2"
UPDATE: #3[id] null => "3"
```

# Update `{"children":[{"id":20,"text":"only"}]}`
```html
<div>
  <span
    id="20"
  >
    only
  </span>
</div>
```
## Change
```
REMOVE: div > :is(#1, #2, #3)
INSERT: div > #20
UPDATE: #20[id] null => "20"
```

# Update `{"children":[{"id":30,"text":"p"},{"id":31,"text":"q"},{"id":32,"text":"r"},{"id":33,"text":"s"},{"id":34,"text":"t"}]}`
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
## Change
```
REMOVE: div > #20
INSERT: div > #30
INSERT: #30 + #31
INSERT: #31 + #32
INSERT: #32 + #33
INSERT: #33 + #34
UPDATE: #30[id] null => "30"
UPDATE: #31[id] null => "31"
UPDATE: #32[id] null => "32"
UPDATE: #33[id] null => "33"
UPDATE: #34[id] null => "34"
```
