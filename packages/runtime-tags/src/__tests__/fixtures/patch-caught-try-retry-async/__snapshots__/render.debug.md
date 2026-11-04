# Render `{"show":true,"value":{}}`
```html
<main>
  Unavailable
</main>
```

# Update `{"show":true,"value":{}}`

# Update
```html
<main />
```
## Change
```
REMOVE: main::text("Unavailable")
```

# Update `{"show":true,"value":{}}`
```html
<main>
  <p>
    ready
  </p>
</main>
```
## Change
```
INSERT: main > p
```
