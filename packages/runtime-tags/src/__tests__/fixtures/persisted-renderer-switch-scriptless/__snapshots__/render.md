# Render `{"kind":"div"}`
```html
<main>
  <section>
    <div />
  </section>
</main>
```

# Update `{"kind":"span"}`
```html
<main>
  <section>
    <span />
  </section>
</main>
```
## Change
```
INSERT: main > section > span
REMOVE: main > section > span + div
```

# Update `{"kind":"banner"}`

## Patch rejected (navigate)
