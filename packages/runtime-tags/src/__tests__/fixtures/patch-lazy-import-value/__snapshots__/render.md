# Render `{"show":false,"label":"a"}`
```html
<main />
```

# Update `{"show":true,"label":"b"}`
```html
<main>
  <button>
    toggle
  </button>
  <span
    class="other"
  >
    other b
  </span>
</main>
```
## Change
```
INSERT: main > button
INSERT: main > button + .other
UPDATE: .other::text@6 "" => "b"
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
    child b
  </span>
</main>
```
## Change
```
INSERT: main > button + .child
```
