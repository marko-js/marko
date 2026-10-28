# Render `{"outer":false,"inner":false,"note":"a","v":{"value":"x"},"w":{"value":"x"}}`
```html
<main />
```

# Update
```html
<main>
  <div>
    <b>
      x
    </b>
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
INSERT: main > div > b
INSERT: main > div > b::text("x")
INSERT: main > div > b + section
INSERT: main > div > section > em
INSERT: main > div > section > em::text("a")
INSERT: main > div > section > em::text@0 + ::text(" ")
INSERT: main > div > section > em::text@1 + ::text("x")
```
## Console
```
LOG "w" "x"
```

# Update `{"outer":true,"inner":false,"note":"b","v":{"value":"y"},"w":{"value":"y"}}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <b>
    y
  </b>
  <section>
    <em>
      b y
    </em>
  </section>
</main>
```
## Change
```
INSERT: main > .toggle
REMOVE: main > section + div
INSERT: .toggle + b
UPDATE: main > b::text " " => "y"
INSERT: main > b + section
UPDATE: main > section > em::text@0 "" => "b"
UPDATE: main > section > em::text@2 "" => "y"
```
## Console
```
LOG "w" "y"
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
REMOVE: .toggle + b
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
  <b>
    y
  </b>
  <section>
    <em>
      b y
    </em>
  </section>
</main>
```
## Change
```
INSERT: .toggle + b
UPDATE: main > b::text " " => "y"
INSERT: main > b + section
UPDATE: main > section > em::text@0 "" => "b"
UPDATE: main > section > em::text@2 "" => "y"
```
## Console
```
LOG "w" "y"
```

# Update `{"outer":false,"inner":true,"note":"c","v":{"value":"z"},"w":{"value":"z"}}`
```html
<main>
  <div>
    <b>
      z
    </b>
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
INSERT: main > div
REMOVE: main > div + .toggle
REMOVE: main > div + b
REMOVE: main > div + section
INSERT: main > div > :is(b, .toggle)
INSERT: .toggle + em
UPDATE: main > div > em::text@0 "" => "c"
UPDATE: main > div > em::text@2 "" => "z"
```
## Console
```
LOG "w" "z"
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <div>
    <b>
      z
    </b>
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
    <b>
      z
    </b>
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
  <b>
    w
  </b>
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
INSERT: main > button
REMOVE: main > em + div
INSERT: main > button:nth-of-type(1) + b
UPDATE: main > b::text " " => "w"
INSERT: main > b + button
INSERT: main > button:nth-of-type(2) + em
UPDATE: main > em::text@0 "" => "d"
UPDATE: main > em::text@2 "" => "w"
```
## Console
```
LOG "w" "w"
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
REMOVE: .toggle + b
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
  <b>
    w
  </b>
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
INSERT: main > button:nth-of-type(1) + b
UPDATE: main > b::text " " => "w"
INSERT: main > b + button
INSERT: main > button:nth-of-type(2) + em
UPDATE: main > em::text@0 "" => "d"
UPDATE: main > em::text@2 "" => "w"
```
## Console
```
LOG "w" "w"
```
