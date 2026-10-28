# Render `{"promise":{}}`
```html
<main>
  <div
    class="ld"
  >
    <em>
      one
    </em>
  </div>
</main>
```

# Update `{"promise":{}}`
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
REMOVE: main > b + div
UPDATE: main > b::text " " => "boom"
```

# Update `{"promise":{}}`

## Patch rejected (navigate)
