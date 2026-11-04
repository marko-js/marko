# Render `{"show":true,"id":"a"}`
```html
<section>
  <p>
    a
  </p>
</section>
```

# Update `{"show":true,"id":"b"}`
```html
<section>
  <p>
    b
  </p>
</section>
```
## Change
```
UPDATE: section > p::text "a" => "b"
```

# Update `{"show":false,"id":"c"}`
## Change
```
REMOVE: section
```

# Update `{"show":true,"id":"d"}`
```html
<section>
  <p>
    d
  </p>
</section>
```
## Change
```
INSERT: section
INSERT: section > p
UPDATE: section > p::text " " => "d"
```
