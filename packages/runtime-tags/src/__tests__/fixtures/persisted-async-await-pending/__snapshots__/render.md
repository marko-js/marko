# Render `{"title":"Store"}`
```html
<main>
  <h1>
    Store
  </h1>
</main>
```

# Update `{"title":"Store!"}`

## Patch rejected (navigate)

# Update
```html
<main>
  <h1>
    Store
  </h1>
  <em>
    slow
  </em>
</main>
```
## Change
```
INSERT: main > h1 + em
INSERT: main > em::text("slow")
```
