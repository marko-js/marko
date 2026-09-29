# Render `{"start":1}`
```html
<main>
  <span>
    box 1
  </span>
  <p>
    1
  </p>
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
document.querySelector("button.reset").click();
```
```html
<main>
  <span>
    box 0
  </span>
  <p>
    0
  </p>
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
UPDATE: main > span::text@4 "1" => "0"
UPDATE: main > p::text "1" => "0"
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
REMOVE: main > span
REMOVE: main > p
REMOVE: main > button
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<main>
  <span>
    box 1
  </span>
  <p>
    1
  </p>
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
INSERT: main > :is(span, p, .reset)
UPDATE: main > span::text@4 "" => "1"
UPDATE: main > p::text " " => "1"
```

# Update `{"start":3}`

# Update
```js
document.querySelector("button.reset").click();
```
```html
<main>
  <span>
    box 0
  </span>
  <p>
    0
  </p>
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
UPDATE: main > span::text@4 "1" => "0"
UPDATE: main > p::text "1" => "0"
```
