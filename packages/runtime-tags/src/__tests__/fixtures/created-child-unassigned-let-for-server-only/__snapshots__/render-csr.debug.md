# Render `{"on":false,"items":["a"]}`
```html
<main>
  <div
    items="a"
  />
</main>
```

# Update `{"on":true,"items":["a","b"]}`
```html
<main>
  <li>
    a
  </li>
  <li>
    b
  </li>
</main>
```
## Change
```
REMOVE: main > li:nth-of-type(2) + div
INSERT: main > li
INSERT: main > li:nth-of-type(1) + li
```

# Update `{"on":false,"items":["a"]}`
```html
<main>
  <div
    items="a"
  />
</main>
```
## Change
```
INSERT: main > div
REMOVE: main > div + li
REMOVE: main > div + li
UPDATE: main > div[items] null => "a"
```

# Update `{"on":true,"items":["c"]}`
```html
<main>
  <li>
    c
  </li>
</main>
```
## Change
```
REMOVE: main > li + div
INSERT: main > li
```
