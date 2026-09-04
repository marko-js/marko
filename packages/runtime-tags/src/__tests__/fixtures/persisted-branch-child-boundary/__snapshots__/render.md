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
REMOVE: main > em
INSERT: main > .ld
INSERT: .ld::text("one")
```
