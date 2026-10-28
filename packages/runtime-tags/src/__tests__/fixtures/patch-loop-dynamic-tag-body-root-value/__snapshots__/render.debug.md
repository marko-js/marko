# Render `{"on":false,"note":"a","rows":[{"id":1,"label":"x"}]}`
```html
<main>
  <div>
    <em>
      a x
    </em>
  </div>
</main>
```

# Update `{"on":true,"note":"b","rows":[{"id":1,"label":"y"},{"id":2,"label":"z"}]}`
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
INSERT: main > button
REMOVE: main > em:nth-of-type(1) + div
INSERT: main > em:nth-of-type(1) + button
INSERT: main > button:nth-of-type(1) + em
INSERT: main > button:nth-of-type(2) + em
UPDATE: main > em:nth-of-type(1)::text@2 "" => "y"
UPDATE: main > em:nth-of-type(1)::text@0 "" => "b"
UPDATE: main > em:nth-of-type(2)::text@0 "" => "b"
UPDATE: main > em:nth-of-type(2)::text@2 "" => "z"
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

# Update `{"on":true,"note":"c","rows":[{"id":1,"label":"w"}]}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    c w
  </em>
</main>
```
## Change
```
REMOVE: main > em + .toggle
REMOVE: main > em + em
UPDATE: main > em::text@0 "b" => "c"
UPDATE: main > em::text@2 "y" => "w"
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
</main>
```
## Change
```
REMOVE: .toggle + em
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
    c w
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "c"
UPDATE: main > em::text@2 "" => "w"
```
