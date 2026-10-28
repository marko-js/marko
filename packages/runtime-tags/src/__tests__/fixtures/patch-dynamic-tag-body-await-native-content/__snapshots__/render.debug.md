# Render `{"on":true,"note":"a","p":{"value":1}}`
```html
<main />
```

# Update
```html
<main>
  <div>
    <button
      class="toggle"
    >
      toggle
    </button>
    <em>
      a
    </em>
  </div>
</main>
```
## Change
```
INSERT: main > div
INSERT: main > div > .toggle
INSERT: .toggle::text("toggle")
INSERT: .toggle + em
INSERT: main > div > em::text("a")
```

# Update `{"on":true,"note":"b","p":{"value":1}}`
```html
<main>
  <div>
    <button
      class="toggle"
    >
      toggle
    </button>
    <em>
      b
    </em>
  </div>
</main>
```
## Change
```
REMOVE: main > div
INSERT: main > div
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <div>
    <button
      class="toggle"
    >
      toggle
    </button>
  </div>
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
  <div>
    <button
      class="toggle"
    >
      toggle
    </button>
    <em>
      b
    </em>
  </div>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > div > em::text " " => "b"
```

# Update `{"on":true,"note":"c","p":{"value":1}}`
```html
<main>
  <div>
    <button
      class="toggle"
    >
      toggle
    </button>
    <em>
      c
    </em>
  </div>
</main>
```
## Change
```
REMOVE: main > div
INSERT: main > div
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <div>
    <button
      class="toggle"
    >
      toggle
    </button>
  </div>
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
  <div>
    <button
      class="toggle"
    >
      toggle
    </button>
    <em>
      c
    </em>
  </div>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > div > em::text " " => "c"
```
