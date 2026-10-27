# Render `{"on":true,"note":"a","w":{"value":"x"}}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
</main>
```

# Update
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    a x
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
INSERT: main > em::text("a")
INSERT: main > em::text@0 + ::text(" ")
INSERT: main > em::text@1 + ::text("x")
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
UPDATE: main > em::text@2 "x" => "y"
UPDATE: main > em::text@0 "a" => "b"
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
UPDATE: main > em::text@2 "y" => "z"
UPDATE: main > em::text@0 "b" => "c"
```
