# Render `{"show":false}`
```html
<div />
```

# Update `{"show":true}`
```html
<div>
  <em>
    undefined
  </em>
</div>
```
## Change
```
INSERT: div > em
UPDATE: div > em::text " " => "undefined"
```

# Update `{"show":true}`

# Update `{"show":false}`
```html
<div />
```
## Change
```
REMOVE: div > em
```
