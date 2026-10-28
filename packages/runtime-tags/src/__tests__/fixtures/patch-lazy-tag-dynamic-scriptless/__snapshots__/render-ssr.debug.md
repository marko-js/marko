# Render `{"show":false,"label":"a"}`
```html
<main />
```

# Update `{"show":true,"label":"b"}`
```html
<main>
  <p
    class="child"
  >
    b
  </p>
</main>
```
## Change
```
INSERT: main > .child
UPDATE: .child::text " " => "b"
```

# Update `{"show":false,"label":"b"}`
```html
<main />
```
## Change
```
REMOVE: main > p
```

# Update `{"show":true,"label":"c"}`
```html
<main>
  <p
    class="child"
  >
    c
  </p>
</main>
```
## Change
```
INSERT: main > .child
UPDATE: .child::text " " => "c"
```
