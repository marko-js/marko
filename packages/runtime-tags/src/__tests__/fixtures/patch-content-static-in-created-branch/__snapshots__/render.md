# Render `{"show":false}`
```html
<main>
  <button
    class="count"
  >
    0
  </button>
</main>
```

# Update `{"show":true}`
```html
<main>
  <div>
    <button
      class="open"
    >
      toggle
    </button>
  </div>
  <button
    class="count"
  >
    0
  </button>
</main>
```
## Change
```
INSERT: main > div
```

# Update
```js
document.querySelector("button.open").click();
```
```html
<main>
  <div>
    <button
      class="open"
    >
      toggle
    </button>
    <em>
      static body
    </em>
  </div>
  <button
    class="count"
  >
    0
  </button>
</main>
```
## Change
```
INSERT: .open + em
```

# Update `{"show":true}`

# Update
```js
document.querySelector("button.open").click();
```
```html
<main>
  <div>
    <button
      class="open"
    >
      toggle
    </button>
  </div>
  <button
    class="count"
  >
    0
  </button>
</main>
```
## Change
```
REMOVE: .open + em
```
