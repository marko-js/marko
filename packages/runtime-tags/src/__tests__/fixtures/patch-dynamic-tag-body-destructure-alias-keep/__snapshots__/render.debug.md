# Render `{"on":true,"note":"a"}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <section>
    <em>
      a
    </em>
  </section>
  <em>
    a
  </em>
</main>
```

# Update `{"on":true,"note":"b"}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <section>
    <em>
      b
    </em>
  </section>
  <em>
    b
  </em>
</main>
```
## Change
```
UPDATE: main > section > em::text "a" => "b"
UPDATE: main > em::text "a" => "b"
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
      b
    </em>
  </section>
</main>
```
## Change
```
REMOVE: main > section + em
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
      b
    </em>
  </section>
  <em>
    b
  </em>
</main>
```
## Change
```
INSERT: main > section + em
UPDATE: main > em::text " " => "b"
```

# Update `{"on":true,"note":"c"}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <section>
    <em>
      c
    </em>
  </section>
  <em>
    c
  </em>
</main>
```
## Change
```
UPDATE: main > section > em::text "b" => "c"
UPDATE: main > em::text "b" => "c"
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
      c
    </em>
  </section>
</main>
```
## Change
```
REMOVE: main > section + em
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
      c
    </em>
  </section>
  <em>
    c
  </em>
</main>
```
## Change
```
INSERT: main > section + em
UPDATE: main > em::text " " => "c"
```
