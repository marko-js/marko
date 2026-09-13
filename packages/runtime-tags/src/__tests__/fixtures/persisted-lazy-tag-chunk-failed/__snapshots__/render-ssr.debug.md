# Render `{"label":"a"}`
```html
<main>
  <button>
    a:0
  </button>
</main>
```

# Update
```js
setTimeout(() => document.body.click());
```

# Update `{"label":"b"}`
## Console
```
ERROR "The lazy module for \"ready:packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-chunk-failed/child.marko\" failed to load; its server-rendered content cannot become interactive."
```

## Patch rejected (navigate)
