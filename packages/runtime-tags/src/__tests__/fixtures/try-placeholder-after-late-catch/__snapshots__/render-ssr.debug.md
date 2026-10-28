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
INSERT: main > em::text("boom")
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
INSERT: main > p::text("6")
INSERT: main > p + span
INSERT: main > span::text("7")
```
