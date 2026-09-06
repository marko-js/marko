# Render `{"label":"a"}`
```html
<main>
  <button
    class="outer"
  >
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button.outer").click();
```
```html
<main>
  <p>
    a:1
  </p>
  <button
    class="outer"
  >
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text@0 "" => "a"
UPDATE: main > p::text@2 "" => "1"
UPDATE: main > p::text@2 "0" => "1"
```

# Update `{"label":"b"}`
```html
<main>
  <p>
    b:1
  </p>
  <button
    class="outer"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@0 "a" => "b"
```

# Update
```js
document.querySelector("button.outer").click();
```
```html
<main>
  <button
    class="outer"
  >
    +
  </button>
</main>
```
## Change
```
REMOVE: main > p
```

# Update
```js
document.querySelector("button.outer").click();
```
```html
<main>
  <p>
    b:1
  </p>
  <button
    class="outer"
  >
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text@0 "" => "b"
UPDATE: main > p::text@2 "" => "1"
UPDATE: main > p::text@2 "0" => "1"
```
