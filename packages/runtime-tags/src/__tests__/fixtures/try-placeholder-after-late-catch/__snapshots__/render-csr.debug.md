# Render `{"a":{"value":{}},"x":{"value":5},"c":{"value":6},"d":{"value":7}}`
```html
<main />
```

# Update
```html
<main>
  <em>
    boom
  </em>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "boom"
```

# Update
```html
<main>
  <em>
    boom
  </em>
  <i>
    loading
  </i>
</main>
```
## Change
```
INSERT: main > em + i
```

# Update
```html
<main>
  <em>
    boom
  </em>
  <span>
    7
  </span>
</main>
```
## Change
```
INSERT: main > em + span
REMOVE: main > span + i
```

# Update
```html
<main>
  <em>
    boom
  </em>
  <p>
    6
  </p>
  <span>
    7
  </span>
</main>
```
## Change
```
INSERT: main > em + p
UPDATE: main > p::text " " => "6"
```
