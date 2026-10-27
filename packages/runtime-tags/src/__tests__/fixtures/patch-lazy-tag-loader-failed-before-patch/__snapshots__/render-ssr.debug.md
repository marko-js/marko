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
## Console
```
ERROR "The lazy module for \"ready:packages/runtime-tags/src/__tests__/fixtures/patch-lazy-tag-loader-failed-before-patch/child.marko\" failed to load; its server-rendered content cannot become interactive."
```

# Update `{"label":"b"}`
```html
<main>
  <button>
    b:0
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@0 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    b:1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@2 "0" => "1"
```
