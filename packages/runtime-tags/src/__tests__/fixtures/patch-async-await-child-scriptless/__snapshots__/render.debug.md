# Render `{"show":false,"promise":{}}`
```html
<main>
  <em>
    closed
  </em>
</main>
```

# Update `{"show":true,"promise":{}}`
```html
<main>
  <b
    class="pill"
  >
    one
  </b>
</main>
```
## Change
```
REMOVE: main > em
INSERT: main > .pill
```

# Update `{"show":true,"promise":{}}`
```html
<main>
  <b
    class="pill"
  >
    two
  </b>
</main>
```
## Change
```
UPDATE: .pill::text "one" => "two"
```
