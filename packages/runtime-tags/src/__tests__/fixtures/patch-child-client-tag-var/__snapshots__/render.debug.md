# Render `{"label":"a"}`
```html
<main>
  <em>
    a x1
  </em>
  <button
    class="bump"
  >
    +
  </button>
  <p
    class="echo"
  >
    1
  </p>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```

# Update
```js
document.querySelector("button.bump").click();
```
```html
<main>
  <em>
    a x2
  </em>
  <button
    class="bump"
  >
    +
  </button>
  <p
    class="echo"
  >
    2
  </p>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text@3 "1" => "2"
UPDATE: .echo::text "1" => "2"
```

# Update `{"label":"b"}`
```html
<main>
  <em>
    b x2
  </em>
  <button
    class="bump"
  >
    +
  </button>
  <p
    class="echo"
  >
    2
  </p>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text@0 "a" => "b"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<main>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
REMOVE: main > em
REMOVE: main > button
REMOVE: main > p
```

# Update `{"label":"c"}`

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<main>
  <em>
    c x1
  </em>
  <button
    class="bump"
  >
    +
  </button>
  <p
    class="echo"
  >
    1
  </p>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
INSERT: main > :is(em, .bump, .echo)
UPDATE: main > em::text@0 "" => "c"
UPDATE: main > em::text@3 "" => "1"
UPDATE: .echo::text " " => "1"
```

# Update `{"label":"d"}`
```html
<main>
  <em>
    d x1
  </em>
  <button
    class="bump"
  >
    +
  </button>
  <p
    class="echo"
  >
    1
  </p>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text@0 "c" => "d"
```
