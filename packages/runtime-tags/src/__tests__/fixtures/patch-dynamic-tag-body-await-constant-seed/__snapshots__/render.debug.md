# Render `{"show":false,"on":true,"v":{"value":"x"}}`
```html
<main />
```

# Update `{"show":true,"on":true,"v":{"value":"y"}}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    n y
  </em>
</main>
```
## Change
```
INSERT: main > .toggle
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "n"
UPDATE: main > em::text@2 "" => "y"
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
    n y
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "n"
UPDATE: main > em::text@2 "" => "y"
```

# Update `{"show":true,"on":true,"v":{"value":"z"}}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    n z
  </em>
</main>
```
## Change
```
UPDATE: main > em::text@2 "y" => "z"
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
    n z
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "n"
UPDATE: main > em::text@2 "" => "z"
```
