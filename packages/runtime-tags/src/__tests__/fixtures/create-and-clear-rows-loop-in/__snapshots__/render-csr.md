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
UPDATE: div > p:nth-of-type(1)::text@0 "" => "1"
UPDATE: div > p:nth-of-type(2)::text@0 "" => "2"
UPDATE: div > p:nth-of-type(3)::text@0 "" => "3"
UPDATE: div > p:nth-of-type(4)::text " " => "1"
UPDATE: div > p:nth-of-type(5)::text " " => "2"
UPDATE: div > p:nth-of-type(6)::text " " => "3"
```
