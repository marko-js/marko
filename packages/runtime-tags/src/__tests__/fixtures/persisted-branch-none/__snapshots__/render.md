# Render `{"after":"one"}`
```html
<div>
  <p>
    one
  </p>
</div>
```

# Update `{"after":"two"}`
```html
<div>
  <p>
    two
  </p>
</div>
```
## Change
```
UPDATE: div > p::text "one" => "two"
```

# Update `{"show":true,"text":"shown","after":"three"}`
```html
<div>
  <p>
    three
  </p>
</div>
```
## Change
```
UPDATE: div > p::text "two" => "three"
```

*patch rejected: falling back to document navigation*
