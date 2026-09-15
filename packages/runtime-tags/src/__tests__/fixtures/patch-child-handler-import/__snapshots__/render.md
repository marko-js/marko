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
    a
  </p>
  <button
    class="run"
  >
    run
  </button>
  <button
    class="outer"
  >
    +
  </button>
</main>
```
## Change
```
INSERT: main > :is(p, .run)
UPDATE: main > p::text "" => "a"
```

# Update
```js
document.querySelector("button.run").click();
```
```html
<main>
  <p>
    a!a!
  </p>
  <button
    class="run"
  >
    run
  </button>
  <button
    class="outer"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@1 "" => "!a!"
```

# Update `{"label":"b"}`
```html
<main>
  <p>
    b!a!
  </p>
  <button
    class="run"
  >
    run
  </button>
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
document.querySelector("button.run").click();
```
```html
<main>
  <p>
    b!b!
  </p>
  <button
    class="run"
  >
    run
  </button>
  <button
    class="outer"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@1 "!a!" => "!b!"
```
