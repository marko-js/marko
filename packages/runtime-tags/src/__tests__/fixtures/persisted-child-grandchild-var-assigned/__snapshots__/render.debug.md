# Render
```html
<main>
  <button
    class="bump"
  >
    +
  </button>
  <em>
    1
  </em>
  <button
    class="reset"
  >
    r
  </button>
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
  <button
    class="bump"
  >
    +
  </button>
  <em>
    2
  </em>
  <button
    class="reset"
  >
    r
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
UPDATE: main > em::text "1" => "2"
```

# Update
```js
document.querySelector("button.reset").click();
```
```html
<main>
  <button
    class="bump"
  >
    +
  </button>
  <em>
    0
  </em>
  <button
    class="reset"
  >
    r
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
UPDATE: main > em::text "2" => "0"
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
REMOVE: main > button
REMOVE: main > em
REMOVE: main > button
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<main>
  <button
    class="bump"
  >
    +
  </button>
  <em>
    1
  </em>
  <button
    class="reset"
  >
    r
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
INSERT: main > :is(.bump, em, .reset)
UPDATE: main > em::text " " => "1"
```

# Update
```js
document.querySelector("button.bump").click();
```
```html
<main>
  <button
    class="bump"
  >
    +
  </button>
  <em>
    2
  </em>
  <button
    class="reset"
  >
    r
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
UPDATE: main > em::text "1" => "2"
```
