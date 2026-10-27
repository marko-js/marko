# Render `{"show":false,"label":"a"}`
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
</main>
```

# Update `{"show":true,"label":"b"}`
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
  <i>
    b
  </i>
</main>
```
## Change
```
INSERT: .flag + .toggle
INSERT: .toggle + i
UPDATE: main > i::text " " => "b"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
REMOVE: .toggle + i
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
  <i>
    b
  </i>
</main>
```
## Change
```
INSERT: .toggle + i
UPDATE: main > i::text " " => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
  <i>
    c
  </i>
</main>
```
## Change
```
UPDATE: main > i::text "b" => "c"
```

# Update `{"show":true,"native":true,"label":"d"}`
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
  <section>
    <i>
      d
    </i>
  </section>
</main>
```
## Change
```
INSERT: .flag + section
REMOVE: main > section + button
REMOVE: main > section + i
UPDATE: main > section > i::text " " => "d"
```

# Update `{"show":true,"label":"e"}`
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
  <i>
    e
  </i>
</main>
```
## Change
```
INSERT: .flag + .toggle
REMOVE: main > i + section
INSERT: .toggle + i
UPDATE: main > i::text " " => "e"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
REMOVE: .toggle + i
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<main>
  <button
    class="flag"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
  <i>
    e
  </i>
</main>
```
## Change
```
INSERT: .toggle + i
UPDATE: main > i::text " " => "e"
```
