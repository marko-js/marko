# Render `{"promise":{},"title":"first"}`
```html
<main>
  <em>
    ok
  </em>
</main>
```

# Update `{"promise":{},"title":"second"}`
```html
<main>
  <em>
    second
  </em>
</main>
```
## Change
```
INSERT: main > em
REMOVE: main > em + em
UPDATE: main > em::text " " => "second"
```

# Update `{"promise":{},"title":"third"}`
```html
<main>
  <em>
    third
  </em>
</main>
```
## Change
```
REMOVE: main > em
INSERT: main > em
UPDATE: main > em::text " " => "third"
```
