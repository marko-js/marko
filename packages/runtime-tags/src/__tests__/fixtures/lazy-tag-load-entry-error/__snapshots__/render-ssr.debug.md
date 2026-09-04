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

# Update
```html
<main>
  <div
    id="error"
  >
    failed
  </div>
</main>
```
## Change
```
INSERT: main > #error
REMOVE: #error + button
```
## Console
```
ERROR "The lazy module for \"ready:packages/runtime-tags/src/__tests__/fixtures/lazy-tag-load-entry-error/child.marko\" failed to load; its server-rendered content cannot become interactive."
```
