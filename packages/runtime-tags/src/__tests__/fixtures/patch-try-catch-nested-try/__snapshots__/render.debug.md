# Render `{"promise":{}}`
```html
<main>
  <em>
    ok
  </em>
  <strong>
    v1
  </strong>
</main>
```

# Update `{"promise":{}}`
```html
<main>
  <span>
    boom
  </span>
</main>
```
## Change
```
INSERT: main > span
REMOVE: main > span + em
REMOVE: main > span + strong
UPDATE: main > span::text " " => "boom"
```

# Update `{"promise":{}}`
```html
<main>
  <em>
    ok
  </em>
  <strong>
    v3
  </strong>
</main>
```
## Change
```
INSERT: main > em
REMOVE: main > strong + span
UPDATE: main > em::text " " => "ok"
INSERT: main > em + strong
```
