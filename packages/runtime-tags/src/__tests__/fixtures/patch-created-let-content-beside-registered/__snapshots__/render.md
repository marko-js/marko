# Render `{"show":false,"label":"a","on":false,"note":"a"}`
```html
<main>
  <div>
    <em>
      a
    </em>
  </div>
</main>
```

# Update `{"show":true,"label":"b","on":true,"note":"b"}`
```html
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static b
  </em>
</section>
<main>
  <button
    id="toggle"
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
INSERT: button, section
INSERT: main > #toggle
REMOVE: main > em + div
INSERT: #toggle + em
UPDATE: main > em::text " " => "b"
```

# Update
```js
d.querySelector("#toggle").click();
```
```html
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static b
  </em>
</section>
<main>
  <button
    id="toggle"
  >
    toggle
  </button>
</main>
```
## Change
```
REMOVE: #toggle + em
```

# Update
```js
d.querySelector("#toggle").click();
```
```html
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static b
  </em>
</section>
<main>
  <button
    id="toggle"
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
INSERT: #toggle + em
UPDATE: main > em::text " " => "b"
```

# Update `{"show":true,"label":"c","on":true,"note":"c"}`
```html
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static c
  </em>
</section>
<main>
  <button
    id="toggle"
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
UPDATE: section > em::text@7 "b" => "c"
UPDATE: main > em::text "b" => "c"
```
