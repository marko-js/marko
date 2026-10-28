# Render `{"a":{"value":3},"b":{"value":4}}`
```html
<main />
```

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
```

# Update
```html
<main>
  <span>
    4
  </span>
</main>
```
## Change
```
INSERT: main > span
REMOVE: main > span + i
```

# Update
```html
<main>
  <p>
    3
  </p>
  <span>
    4
  </span>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "3"
```
