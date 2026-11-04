# Render `{"on":true,"note":"a"}`
```html
<main>
  <em>
    a
  </em>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    a
  </em>
</main>
```

# Update `{"on":true,"note":"b"}`
```html
<main>
  <em>
    b
  </em>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    b
  </em>
</main>
```
## Change
```
UPDATE: main > em:nth-of-type(1)::text "a" => "b"
UPDATE: main > em:nth-of-type(2)::text "a" => "b"
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <em>
    b
  </em>
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
  <em>
    b
  </em>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    b
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em:nth-of-type(2)::text " " => "b"
```

# Update `{"on":true,"note":"c"}`
```html
<main>
  <em>
    c
  </em>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    c
  </em>
</main>
```
## Change
```
UPDATE: main > em:nth-of-type(1)::text "b" => "c"
UPDATE: main > em:nth-of-type(2)::text "b" => "c"
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <em>
    c
  </em>
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
  <em>
    c
  </em>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    c
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em:nth-of-type(2)::text " " => "c"
```
