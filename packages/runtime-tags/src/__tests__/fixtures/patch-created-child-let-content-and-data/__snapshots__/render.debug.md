# Render `{"show":false,"n":1,"more":true}`

# Update `{"show":true,"n":2,"more":true}`
```html
<section>
  <em>
    body
  </em>
  <b>
    2
  </b>
</section>
```
## Change
```
INSERT: section
INSERT: section > em
UPDATE: section > b::text " " => "2"
```

# Update `{"show":true,"n":3,"more":false}`
## Change
```
REMOVE: section
```

# Update `{"show":true,"n":4,"more":true}`
```html
<section>
  <em>
    body
  </em>
  <b>
    2
  </b>
</section>
```
## Change
```
INSERT: section
INSERT: section > em
UPDATE: section > b::text " " => "2"
```
