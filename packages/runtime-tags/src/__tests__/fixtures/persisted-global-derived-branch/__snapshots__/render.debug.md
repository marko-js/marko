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
UPDATE: main > p:nth-of-type(1)::text "a" => "a"
INSERT: main > p:nth-of-type(1) + p
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
