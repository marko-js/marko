# Render `{"on":false,"p":true,"note":"a"}`
```html
<main>
  <div>
    <section>
      <em>
        a
      </em>
    </section>
  </div>
</main>
```

# Update `{"on":true,"p":true,"note":"b"}`
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
INSERT: main > .toggle
REMOVE: main > section + div
INSERT: .toggle + section
INSERT: main > section > em
UPDATE: main > section > em::text " " => "b"
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
      b
    </em>
  </section>
</main>
```
## Change
```
INSERT: .toggle + section
INSERT: main > section > em
UPDATE: main > section > em::text " " => "b"
```

# Update `{"on":true,"p":true,"note":"c"}`
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
UPDATE: main > section > em::text "b" => "c"
```
