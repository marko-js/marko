# Render `{"show":true,"on":true,"note":"b"}`
```html
<main>
  <button
    class="inc"
  >
    1
  </button>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    b 1
  </em>
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
    class="inc"
  >
    1
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
    class="inc"
  >
    1
  </button>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    b 1
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "b"
UPDATE: main > em::text@2 "" => "1"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<main>
  <button
    class="inc"
  >
    2
  </button>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    b 2
  </em>
</main>
```
## Change
```
UPDATE: .inc::text "1" => "2"
UPDATE: main > em::text@2 "1" => "2"
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <button
    class="inc"
  >
    2
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
    class="inc"
  >
    2
  </button>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    b 2
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "b"
UPDATE: main > em::text@2 "" => "2"
```
