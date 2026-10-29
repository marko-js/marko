# Render `{"promise":{}}`
```html
<main>
  <em>
    hi
  </em>
</main>
```

# Update `{"promise":{"value":{}}}`
```html
<main>
  <b>
    boom
  </b>
</main>
```
## Change
```
INSERT: main::text("loading")
REMOVE: ::text + em
INSERT: main > b
REMOVE: main > b + ::text("loading")
UPDATE: main > b::text " " => "boom"
```
