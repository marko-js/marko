# Render `{"items":["a"]}`
```html
<main>
  <p>
    a
  </p>
</main>
```

# Update `{"items":["a","b"]}`
```html
<main>
  <p>
    a
  </p>
  <p>
    b
  </p>
</main>
```
## Change
```
INSERT: main > p:nth-of-type(1) + p
UPDATE: main > p:nth-of-type(2)::text " " => "b"
REMOVE: main > style::text("a")
INSERT: main > style::text("a+b")
```

# Update `{"items":[]}`
```html
<main />
```
## Change
```
REMOVE: main > p
REMOVE: main > p
REMOVE: main > style
```
