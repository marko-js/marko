# Render `{"n":1,"more":false}`

# Update `{"n":1,"more":true}`
```html
<section>
  <em>
    body
  </em>
  <b>
    1
  </b>
</section>
```
## Change
```
INSERT: section
INSERT: section > em
UPDATE: section > b::text " " => "1"
```

# Update `{"n":1,"more":false}`
## Change
```
REMOVE: section
```

# Update `{"n":2,"more":true}`
```html
<section>
  <em>
    body
  </em>
  <b>
    1
  </b>
</section>
```
## Change
```
INSERT: section
INSERT: section > em
UPDATE: section > b::text " " => "1"
```
