# Render `{"show":false,"label":"a"}`
```html
<main />
```

# Update `{"show":true,"label":"a"}`
```html
<main>
  <button>
    :
  </button>
</main>
```
## Change
```
INSERT: main > button
```
## Console
```
ERROR "The lazy module for \"ready:packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-construct-load-failed/child.marko\" failed to load; its server-rendered content cannot become interactive."
```

## Patch rejected (navigate)
