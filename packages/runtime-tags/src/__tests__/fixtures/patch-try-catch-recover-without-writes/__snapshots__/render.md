# Render `{"boom":false}`
```html
<main>
  <em>
    ok
  </em>
</main>
```

# Update `{"boom":true}`
```html
<main>
  <b>
    boom
  </b>
</main>
```
## Change
```
INSERT: main > b
REMOVE: main > b + em
UPDATE: main > b::text " " => "boom"
```

# Update `{"boom":false}`
```html
<main>
  <em>
    ok
  </em>
</main>
```
## Change
```
INSERT: main > em
REMOVE: main > em + b
```
