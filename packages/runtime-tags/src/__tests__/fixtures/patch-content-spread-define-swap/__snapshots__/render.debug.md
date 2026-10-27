# Render `{"which":true,"title":"t1"}`
```html
<div>
  <em>
    one t1
  </em>
</div>
```

# Update `{"which":false,"title":"t2"}`
```html
<div>
  <strong>
    two t2
  </strong>
</div>
```
## Change
```
REMOVE: div > em
INSERT: div > strong
UPDATE: div > strong::text@4 "" => "t2"
```

# Update `{"which":true,"title":"t3"}`
```html
<div>
  <em>
    one t3
  </em>
</div>
```
## Change
```
REMOVE: div > strong
INSERT: div > em
UPDATE: div > em::text@4 "" => "t3"
```
