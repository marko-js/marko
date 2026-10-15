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
INSERT: main > .pill
REMOVE: main > em
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
