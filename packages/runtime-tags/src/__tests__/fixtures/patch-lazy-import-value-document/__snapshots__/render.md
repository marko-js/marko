# Render `{"show":true,"label":"a"}`
```html
<main>
  <button>
    toggle
  </button>
  <span
    class="other"
  >
    other a
  </span>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    toggle
  </button>
</main>
```
## Change
```
REMOVE: main > button + span
```

# Update
```html
<main>
  <button>
    toggle
  </button>
  <span
    class="child"
  >
    child a
  </span>
</main>
```
## Change
```
INSERT: main > button + .child
```
