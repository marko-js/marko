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

# Mutations
```
INSERT div
```

# Render `{"children":{}}`

```html
<div />
```

# Mutations
```
INSERT div/#text0
REMOVE p before p
REMOVE p before p
REMOVE p before div/#text0
INSERT div/#text1
REMOVE p after div/#text0
REMOVE p after div/#text0
REMOVE p after div/#text0
```

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

# Mutations
```
REMOVE #text before #text
INSERT div/p0
INSERT div/p1
INSERT div/p2
REMOVE #text after div/p2
INSERT div/p3
INSERT div/p4
INSERT div/p5
UPDATE div/p0/#text0 "" => "1"
UPDATE div/p1/#text0 "" => "2"
UPDATE div/p2/#text0 "" => "3"
UPDATE div/p3/#text " " => "1"
UPDATE div/p4/#text " " => "2"
UPDATE div/p5/#text " " => "3"
```