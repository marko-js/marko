# Render `{"title":"a"}`
```html
<main>
  <button
    class="step"
  >
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button.step").click();
```

# Update
```js
document.querySelector("button.step").click();
```
```html
<main>
  <button
    class="read"
  >
    read
  </button>
  <button
    class="step"
  >
    +
  </button>
</main>
```
## Change
```
INSERT: main > .read
```

# Update `{"title":"b"}`

# Update
```js
document.querySelector("button.read").click();
```
```html
<main
  data-title="b"
>
  <button
    class="read"
  >
    read
  </button>
  <button
    class="step"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main[data-title] null => "b"
```
