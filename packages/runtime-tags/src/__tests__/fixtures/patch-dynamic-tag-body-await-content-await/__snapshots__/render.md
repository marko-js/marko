# Render `{"outer":false,"inner":false,"note":"a","v":{"value":"x"},"w":{"value":"x"}}`
```html
<main />
```

# Update
```html
<main>
  <div>
    <section>
      <em>
        a x
      </em>
    </section>
  </div>
</main>
```
## Change
```
INSERT: main > div
INSERT: main > div > section
INSERT: main > div > section > em
INSERT: main > div > section > em::text("a")
INSERT: main > div > section > em::text@0 + ::text(" ")
INSERT: main > div > section > em::text@1 + ::text("x")
```

# Update `{"outer":true,"inner":false,"note":"b","v":{"value":"y"},"w":{"value":"y"}}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <section>
    <em>
      b y
    </em>
  </section>
</main>
```
## Change
```
REMOVE: main > div
INSERT: main > .toggle
INSERT: .toggle + section
UPDATE: main > section > em::text@0 "" => "b"
UPDATE: main > section > em::text@2 "" => "y"
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
REMOVE: .toggle + section
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
  <section>
    <em>
      b y
    </em>
  </section>
</main>
```
## Change
```
INSERT: .toggle + section
UPDATE: main > section > em::text@0 "" => "b"
UPDATE: main > section > em::text@2 "" => "y"
```

# Update `{"outer":false,"inner":true,"note":"c","v":{"value":"z"},"w":{"value":"z"}}`
```html
<main>
  <div>
    <button
      class="toggle"
    >
      toggle
    </button>
    <em>
      c z
    </em>
  </div>
</main>
```
## Change
```
REMOVE: main > .toggle
REMOVE: main > section
INSERT: main > div
INSERT: main > div > .toggle
INSERT: .toggle + em
UPDATE: main > div > em::text@0 "" => "c"
UPDATE: main > div > em::text@2 "" => "z"
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
      c z
    </em>
  </div>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > div > em::text@0 "" => "c"
UPDATE: main > div > em::text@2 "" => "z"
```

# Update `{"outer":true,"inner":true,"note":"d","v":{"value":"w"},"w":{"value":"w"}}`
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
    d w
  </em>
</main>
```
## Change
```
REMOVE: main > div
INSERT: main > button
INSERT: main > button:nth-of-type(1) + button
INSERT: main > button:nth-of-type(2) + em
UPDATE: main > em::text@0 "" => "d"
UPDATE: main > em::text@2 "" => "w"
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
    d w
  </em>
</main>
```
## Change
```
INSERT: main > button:nth-of-type(1) + button
INSERT: main > button:nth-of-type(2) + em
UPDATE: main > em::text@0 "" => "d"
UPDATE: main > em::text@2 "" => "w"
```
