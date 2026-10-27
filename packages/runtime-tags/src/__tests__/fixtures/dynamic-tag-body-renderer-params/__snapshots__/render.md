# Render `{"show":true,"label":"b"}`
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
  <i>
    b
  </i>
</main>
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
REMOVE: .toggle + i
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
  <i>
    b
  </i>
</main>
```
## Change
```
INSERT: .toggle + i
UPDATE: main > i::text " " => "b"
```
