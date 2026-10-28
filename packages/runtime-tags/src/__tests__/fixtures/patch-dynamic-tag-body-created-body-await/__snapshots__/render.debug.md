# Render `{"on":false,"note":"a","w":{"value":"x"}}`
```html
<main>
  <div />
</main>
```

# Update
```html
<main>
  <div>
    <em>
      a x
    </em>
  </div>
</main>
```
## Change
```
INSERT: main > div > em
INSERT: main > div > em::text("a")
INSERT: main > div > em::text@0 + ::text(" ")
INSERT: main > div > em::text@1 + ::text("x")
```

# Update `{"on":true,"note":"b","w":{"value":"y"}}`
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
INSERT: main > .toggle
REMOVE: main > em + div
INSERT: .toggle + em
UPDATE: main > em::text@2 "" => "y"
UPDATE: main > em::text@0 "" => "b"
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
UPDATE: main > em::text@2 "" => "y"
UPDATE: main > em::text@0 "" => "b"
```

# Update `{"on":true,"note":"c","w":{"value":"z"}}`
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
REMOVE: main > em
INSERT: .toggle + em
```
