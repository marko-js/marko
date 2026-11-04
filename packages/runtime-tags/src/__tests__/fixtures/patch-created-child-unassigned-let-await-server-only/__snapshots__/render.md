# Render `{"on":false,"n":1}`
```html
<main>
  <div
    n="1"
  />
</main>
```

# Update `{"on":true,"n":2}`
```html
<main>
  <p>
    2
  </p>
</main>
```
## Change
```
REMOVE: main > p + div
INSERT: main > p
UPDATE: main > p::text " " => "2"
```

# Update `{"on":false,"n":2}`
```html
<main>
  <div
    n="2"
  />
</main>
```
## Change
```
INSERT: main > div
REMOVE: main > div + p
UPDATE: main > div[n] null => "2"
```

# Update `{"on":true,"n":3}`
```html
<main>
  <p>
    3
  </p>
</main>
```
## Change
```
REMOVE: main > p + div
INSERT: main > p
UPDATE: main > p::text " " => "3"
```
