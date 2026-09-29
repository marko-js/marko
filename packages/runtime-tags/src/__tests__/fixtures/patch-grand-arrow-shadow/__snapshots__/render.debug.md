# Render `{"title":"a"}`
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
    t:a
  </p>
  <button>
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
INSERT: main > :is(p, button)
UPDATE: main > p::text " " => "t:a"
```

# Update `{"title":"b"}`
```html
<main>
  <p>
    t:b
  </p>
  <button>
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
UPDATE: main > p::text "t:a" => "t:b"
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
REMOVE: main > button
```

# Update `{"title":"c"}`
