# Render `{"on":false,"note":"a","v":{"value":"x"}}`
```html
<main />
```

# Update
```html
<main>
  <div>
    <em>
      a x
    </em>
  </div>
  <div>
    <b>
      a
    </b>
  </div>
</main>
```
## Change
```
INSERT: main > div
INSERT: main > div:nth-of-type(1) > em
INSERT: main > div:nth-of-type(1) > em::text("a")
INSERT: main > div:nth-of-type(1) > em::text@0 + ::text(" ")
INSERT: main > div:nth-of-type(1) > em::text@1 + ::text("x")
INSERT: main > div:nth-of-type(1) + div
INSERT: main > div:nth-of-type(2) > b
INSERT: main > div:nth-of-type(2) > b::text("a")
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
  <button
    class="toggle"
  >
    toggle
  </button>
  <b>
    b
  </b>
</main>
```
## Change
```
INSERT: main > button
REMOVE: main > b + div
INSERT: main > button:nth-of-type(2) + b
UPDATE: main > b::text " " => "b"
REMOVE: main > div
INSERT: main > :is(button, em)
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
</main>
```
## Change
```
REMOVE: main > button:nth-of-type(2) + b
REMOVE: main > button:nth-of-type(1) + em
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
  <button
    class="toggle"
  >
    toggle
  </button>
  <b>
    b
  </b>
</main>
```
## Change
```
INSERT: main > button:nth-of-type(2) + b
INSERT: main > button:nth-of-type(1) + em
UPDATE: main > b::text " " => "b"
UPDATE: main > em::text@2 "" => "y"
UPDATE: main > em::text@0 "" => "b"
```

# Update `{"on":false,"note":"c","v":{"value":"z"}}`
```html
<main>
  <div>
    <em>
      c z
    </em>
  </div>
  <div>
    <b>
      c
    </b>
  </div>
</main>
```
## Change
```
INSERT: main > div:nth-of-type(1) + div
REMOVE: main > div:nth-of-type(2) + button
REMOVE: main > div:nth-of-type(2) + b
UPDATE: main > div:nth-of-type(2) > b::text " " => "c"
REMOVE: main > button
REMOVE: main > em
INSERT: main > div
```
