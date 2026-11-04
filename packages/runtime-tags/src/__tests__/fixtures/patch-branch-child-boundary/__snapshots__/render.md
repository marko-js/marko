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
  <div
    class="ld"
  >
    one
  </div>
</main>
```
## Change
```
INSERT: main > .ld
REMOVE: main > em
INSERT: .ld::text("one")
```
