# Render `{"on":false,"note":"a"}`
```html
<main>
  <button
    class="inc"
  >
    1
  </button>
  <div>
    <em>
      a 1
    </em>
  </div>
</main>
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
  <div>
    <em>
      a 2
    </em>
  </div>
</main>
```
## Change
```
UPDATE: .inc::text "1" => "2"
UPDATE: main > div > em::text@2 "1" => "2"
```

# Update `{"on":true,"note":"b"}`
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
INSERT: .inc + .toggle
REMOVE: main > em + div
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "b"
UPDATE: main > em::text@2 "" => "2"
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

# Update
```js
document.querySelector(".inc").click();
```
```html
<main>
  <button
    class="inc"
  >
    3
  </button>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    b 3
  </em>
</main>
```
## Change
```
UPDATE: .inc::text "2" => "3"
UPDATE: main > em::text@2 "2" => "3"
```

# Update `{"on":true,"note":"c"}`
```html
<main>
  <button
    class="inc"
  >
    3
  </button>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    c 3
  </em>
</main>
```
## Change
```
UPDATE: main > em::text@0 "b" => "c"
```
