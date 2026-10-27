# Render `{"tone":"info","show":true}`
```html
<main>
  <button
    class="btn info"
  >
    +
  </button>
  <span
    class="even"
  >
    parity
  </span>
  <em
    class="info"
  >
    note
  </em>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button
    class="btn info odd"
  >
    +
  </button>
  <span
    class="odd"
  >
    parity
  </span>
  <em
    class="info"
  >
    note
  </em>
</main>
```
## Change
```
UPDATE: main > span[class] "even" => "odd"
UPDATE: .btn.info.odd[class] "btn info" => "btn info odd"
```

# Update `{"tone":"warn","show":true}`
```html
<main>
  <button
    class="btn warn odd"
  >
    +
  </button>
  <span
    class="odd"
  >
    parity
  </span>
  <em
    class="warn"
  >
    note
  </em>
</main>
```
## Change
```
UPDATE: main > em[class] "info" => "warn"
UPDATE: .btn.warn.odd[class] "btn info odd" => "btn warn odd"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button
    class="btn warn"
  >
    +
  </button>
  <span
    class="even"
  >
    parity
  </span>
  <em
    class="warn"
  >
    note
  </em>
</main>
```
## Change
```
UPDATE: .even[class] "odd" => "even"
UPDATE: .btn.warn[class] "btn warn odd" => "btn warn"
```
