# Render `{"on":true,"note":"b","rows":[{"id":1,"label":"y"},{"id":2,"label":"z"}]}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    b y
  </em>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    b z
  </em>
</main>
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <button
    class="toggle"
  >
    toggle
  </button>
</main>
```
## Change
```
REMOVE: main > button:nth-of-type(1) + em
REMOVE: main > button:nth-of-type(2) + em
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    b y
  </em>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    b z
  </em>
</main>
```
## Change
```
INSERT: main > button:nth-of-type(1) + em
INSERT: main > button:nth-of-type(2) + em
UPDATE: main > em:nth-of-type(1)::text@2 "" => "y"
UPDATE: main > em:nth-of-type(1)::text@0 "" => "b"
UPDATE: main > em:nth-of-type(2)::text@0 "" => "b"
UPDATE: main > em:nth-of-type(2)::text@2 "" => "z"
```
