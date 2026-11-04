# Render `{"show":false,"which":true,"id":"a"}`

# Update `{"show":true,"which":true,"id":"b"}`
```html
<section>
  <i>
    one b
  </i>
  <p>
    b
  </p>
</section>
```
## Change
```
INSERT: section
INSERT: section > p
INSERT: section > i
UPDATE: section > i::text@4 "" => "b"
UPDATE: section > p::text " " => "b"
```

# Update `{"show":true,"which":false,"id":"c"}`
```html
<section>
  <b>
    two c
  </b>
  <p>
    c
  </p>
</section>
```
## Change
```
INSERT: section > b
REMOVE: section > b + i
UPDATE: section > b::text@4 "" => "c"
UPDATE: section > p::text "b" => "c"
```

# Update `{"show":false,"which":true,"id":"d"}`
## Change
```
REMOVE: section
```

# Update `{"show":true,"which":true,"id":"e"}`
```html
<section>
  <i>
    one e
  </i>
  <p>
    e
  </p>
</section>
```
## Change
```
INSERT: section
INSERT: section > p
INSERT: section > i
UPDATE: section > i::text@4 "" => "e"
UPDATE: section > p::text " " => "e"
```
