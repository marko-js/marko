# Render `{"note":"n1"}`
```html
<main>
  <button
    class="n"
  >
    0
  </button>
  <em>
    n1
  </em>
  <button
    class="t"
  >
    t
  </button>
</main>
```

# Update
```js
document.querySelector(".n").click();
```
```html
<main>
  <button
    class="n"
  >
    1
  </button>
  <em>
    n1
  </em>
  <button
    class="t"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: .n::text "0" => "1"
```

# Update `{"note":"n2"}`
```html
<main>
  <button
    class="n"
  >
    1
  </button>
  <em>
    n2
  </em>
  <button
    class="t"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "n1" => "n2"
```

# Update `{"note":"n3"}`
```html
<main>
  <button
    class="n"
  >
    1
  </button>
  <em>
    n3
  </em>
  <button
    class="t"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "n2" => "n3"
```
