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
INSERT: button, section
INSERT: .flag + .toggle
INSERT: .toggle + i
UPDATE: main > i::text " " => "b"
```

# Update
```js
document.querySelector(".toggle").click();
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
UPDATE: section > em::text@7 "b" => "c"
UPDATE: main > i::text "b" => "c"
```

# Update `{"show":true,"native":true,"label":"d"}`
```html
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static d
  </em>
</section>
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
UPDATE: section > em::text@7 "c" => "d"
INSERT: .flag + section
REMOVE: main > section + button
REMOVE: main > section + i
UPDATE: main > section > i::text " " => "d"
```

# Update `{"show":true,"label":"e"}`
```html
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static e
  </em>
</section>
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
UPDATE: section > em::text@7 "d" => "e"
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
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static e
  </em>
</section>
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
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static e
  </em>
</section>
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
