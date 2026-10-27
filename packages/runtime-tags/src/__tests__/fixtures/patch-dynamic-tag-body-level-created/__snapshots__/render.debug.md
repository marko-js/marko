# Render `{"show":false,"on":true,"note":"a"}`
```html
<main />
```

# Update `{"show":true,"on":true,"note":"b"}`
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
INSERT: main > :is(.inc, .toggle)
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "b"
UPDATE: main > em::text@2 "" => "1"
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

# Update `{"show":true,"on":true,"note":"c"}`
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
    c 2
  </em>
</main>
```
## Change
```
UPDATE: main > em::text@0 "b" => "c"
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
    c 2
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "c"
UPDATE: main > em::text@2 "" => "2"
```
