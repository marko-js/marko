# Render `{"show":false,"id":"a","value":{"value":"x"}}`

# Update `{"show":true,"id":"b","value":{"value":"y"}}`
```html
<section>
  <p>
    b:y
  </p>
</section>
```
## Change
```
INSERT: section
INSERT: section > :is(::text("loading "), ::text("b"))
INSERT: section > p
REMOVE: section > p + ::text("loading ")
REMOVE: section > p + ::text("b")
```

# Update `{"show":true,"id":"c","value":{}}`
```html
<section>
  <p>
    c:z
  </p>
</section>
```
## Change
```
UPDATE: section > p::text@0 "b" => "c"
UPDATE: section > p::text@2 "y" => "z"
```

# Update `{"show":false,"id":"d","value":{}}`
## Change
```
REMOVE: section
```

# Update `{"show":true,"id":"e","value":{"value":"v"}}`
```html
<section>
  <p>
    e:v
  </p>
</section>
```
## Change
```
INSERT: section
INSERT: section > p
```
