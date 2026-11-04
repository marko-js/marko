# Render `{"label":"a"}`
```html
<div>
  <p>
    a
  </p>
</div>
```

# Update `{"label":"b"}`
```html
<div>
  <p>
    b
  </p>
</div>
```
## Change
```
REMOVE: div > p::text("a")
INSERT: div > p::text("b")
```
