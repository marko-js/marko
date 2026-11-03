# Render `{"show":true,"fail":true}`
```html
<main>
  Unavailable
</main>
```

# Update `{"show":true,"fail":true}`

# Update
```html
<main />
```
## Change
```
REMOVE: main::text("Unavailable")
```

# Update `{"show":true}`
```html
<main>
  <p>
    Ready
  </p>
</main>
```
## Change
```
INSERT: main > p
```

# Update `{"show":true,"fail":true}`
```html
<main>
  Unavailable
</main>
```
## Change
```
INSERT: main::text("Unavailable")
REMOVE: main::text + p
```

# Update `{"show":true,"fail":true}`
