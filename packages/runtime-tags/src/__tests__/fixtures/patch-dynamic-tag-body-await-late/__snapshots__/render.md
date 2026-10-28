# Render `{"on":false,"note":"a","v":{}}`
```html
<main>
  <div>
    <em>
      a x
    </em>
  </div>
</main>
```

# Update `{"on":true,"note":"b","v":{"value":"y"}}`
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
</main>
```
## Change
```
REMOVE: main > div
INSERT: main > :is(.toggle, em)
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
    b y
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "b"
UPDATE: main > em::text@2 "" => "y"
```

# Update `{"on":true,"note":"c","v":{"value":"z"}}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    c z
  </em>
</main>
```
## Change
```
REMOVE: main > .toggle
REMOVE: main > em
INSERT: main > :is(.toggle, em)
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
    c z
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "c"
UPDATE: main > em::text@2 "" => "z"
```

# Update `{"on":false,"note":"d","v":{"value":"w"}}`
```html
<main>
  <div>
    <em>
      d w
    </em>
  </div>
</main>
```
## Change
```
REMOVE: main > button
REMOVE: main > em
INSERT: main > div
```
