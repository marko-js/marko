# Render
```html
<main>
  <button
    class="show"
  >
    show
  </button>
  <button
    class="inc"
  >
    inc
  </button>
</main>
```

# Update
```js
document.querySelector(".show").click();
```
```html
<main
  data-count="1"
>
  <button
    class="show"
  >
    show
  </button>
  <button
    class="inc"
  >
    inc
  </button>
</main>
```
## Change
```
UPDATE: main[data-count] null => "1"
```

# Update
```js
document.querySelector(".inc").click();
```
