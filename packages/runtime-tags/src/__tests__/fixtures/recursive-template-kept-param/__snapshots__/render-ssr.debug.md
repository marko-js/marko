# Render `{"label":"b"}`
```html
<main>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    1:b
  </em>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    2:b
  </em>
  <button
    class="toggle"
  >
    t
  </button>
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
    t
  </button>
  <button
    class="toggle"
  >
    t
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
    t
  </button>
  <em>
    1:b
  </em>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    2:b
  </em>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
INSERT: main > button:nth-of-type(1) + em
INSERT: main > button:nth-of-type(2) + em
UPDATE: main > em:nth-of-type(1)::text@2 "" => "b"
UPDATE: main > em:nth-of-type(1)::text@0 "" => "1"
UPDATE: main > em:nth-of-type(2)::text@0 "" => "2"
UPDATE: main > em:nth-of-type(2)::text@2 "" => "b"
```
