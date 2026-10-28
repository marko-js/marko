# Render `{"on":false,"p":false,"note":"a"}`
```html
<main>
  <div>
    <span>
      <em>
        a
      </em>
    </span>
  </div>
</main>
```

# Update `{"on":true,"p":true,"note":"b"}`
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
  <em>
    b
  </em>
</main>
```
## Change
```
INSERT: main > button
REMOVE: main > em + div
INSERT: main > button:nth-of-type(1) + button
INSERT: main > button:nth-of-type(2) + em
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
REMOVE: .toggle + .toggle
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
INSERT: main > button:nth-of-type(1) + button
INSERT: main > button:nth-of-type(2) + em
UPDATE: main > em::text " " => "b"
```

# Update `{"on":true,"p":true,"note":"c"}`
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
  <em>
    c
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "b" => "c"
```
