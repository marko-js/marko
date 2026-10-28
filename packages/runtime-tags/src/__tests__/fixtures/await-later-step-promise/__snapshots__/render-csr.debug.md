# Render `{"promise":{}}`
```html
<main />
```

# Update
```html
<main>
  <span>
    a
  </span>
</main>
```
## Change
```
INSERT: main > span
UPDATE: main > span::text " " => "a"
```

# Update `{"promise":{"value":"b"}}`

# Update
```html
<main>
  <i>
    loading
  </i>
</main>
```
## Change
```
INSERT: main > i
REMOVE: main > i + span
```

# Update
```html
<main>
  <span>
    b
  </span>
</main>
```
## Change
```
INSERT: main > span
REMOVE: main > span + i
```
