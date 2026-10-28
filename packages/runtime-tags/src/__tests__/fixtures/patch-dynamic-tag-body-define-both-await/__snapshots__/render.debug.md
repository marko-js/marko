# Render `{"on":false,"note":"a","v":{"value":"x"}}`
```html
<main>
  <section>
    <div>
      <em>
        a
      </em>
    </div>
  </section>
</main>
```

# Update
```html
<main>
  <section>
    <div>
      <em>
        a
      </em>
    </div>
  </section>
  <div>
    <em>
      a
    </em>
  </div>
</main>
```
## Change
```
INSERT: main > section + div
INSERT: main > div > em
INSERT: main > div > em::text("a")
```

# Update `{"on":true,"note":"b","v":{"value":"y"}}`
```html
<main>
  <section>
    <button
      class="toggle"
    >
      toggle
    </button>
    <em>
      b
    </em>
  </section>
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
INSERT: main > section > button
REMOVE: main > section > em + div
INSERT: main > section > button + em
UPDATE: main > section > em::text " " => "b"
REMOVE: main > div
INSERT: main > section + :is(button, em)
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <section>
    <button
      class="toggle"
    >
      toggle
    </button>
  </section>
  <button
    class="toggle"
  >
    toggle
  </button>
</main>
```
## Change
```
REMOVE: main > section > button + em
REMOVE: main > button + em
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <section>
    <button
      class="toggle"
    >
      toggle
    </button>
    <em>
      b
    </em>
  </section>
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
INSERT: main > section > button + em
INSERT: main > button + em
UPDATE: main > section > em::text " " => "b"
UPDATE: main > em::text " " => "b"
```

# Update `{"on":true,"note":"c","v":{"value":"z"}}`
```html
<main>
  <section>
    <button
      class="toggle"
    >
      toggle
    </button>
    <em>
      c
    </em>
  </section>
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
UPDATE: main > section > em::text "b" => "c"
REMOVE: main > button
REMOVE: main > em
INSERT: main > section + :is(button, em)
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <section>
    <button
      class="toggle"
    >
      toggle
    </button>
  </section>
  <button
    class="toggle"
  >
    toggle
  </button>
</main>
```
## Change
```
REMOVE: main > section > button + em
REMOVE: main > button + em
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <section>
    <button
      class="toggle"
    >
      toggle
    </button>
    <em>
      c
    </em>
  </section>
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
INSERT: main > section > button + em
INSERT: main > button + em
UPDATE: main > section > em::text " " => "c"
UPDATE: main > em::text " " => "c"
```
