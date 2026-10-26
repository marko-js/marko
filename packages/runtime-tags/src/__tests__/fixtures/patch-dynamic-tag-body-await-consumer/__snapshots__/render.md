# Render `{"on":false,"note":"a","p":{"value":1}}`
```html
<main>
  <div>
    <em>
      a
    </em>
  </div>
</main>
```

# Update `{"on":true,"note":"b","p":{"value":1}}`
```html
<main>
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
INSERT: main > .toggle
REMOVE: main > em + div
INSERT: .toggle + em
UPDATE: main > em::text " " => "b"
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
    b
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text " " => "b"
```

# Update `{"on":true,"note":"c","p":{"value":1}}`
```html
<main>
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
UPDATE: main > em::text "b" => "c"
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
    c
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text " " => "c"
```
