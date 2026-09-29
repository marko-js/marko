# Render `{"suffix":"s1"}`
```html
<main>
  <em>
    0s1
  </em>
  <button>
    +
  </button>
  <button
    class="t"
  >
    t
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    1s1
  </em>
  <button>
    +
  </button>
  <button
    class="t"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "0s1" => "1s1"
```

# Update `{"suffix":"s2"}`
```html
<main>
  <em>
    1s2
  </em>
  <button>
    +
  </button>
  <button
    class="t"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "1s1" => "1s2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    2s2
  </em>
  <button>
    +
  </button>
  <button
    class="t"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "1s2" => "2s2"
```
