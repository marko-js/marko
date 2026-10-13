# Render `{"a":{},"b":{}}`
```html
<main>
  <em>
    a1
  </em>
  <strong>
    b1
  </strong>
</main>
```

# Update `{"a":{},"b":{}}`
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

# Update `{"a":{},"b":{}}`
```html
<main>
  <em>
    a3
  </em>
  <strong>
    b3
  </strong>
</main>
```
## Change
```
REMOVE: main > strong + span
INSERT: main > :is(em, strong)
```
