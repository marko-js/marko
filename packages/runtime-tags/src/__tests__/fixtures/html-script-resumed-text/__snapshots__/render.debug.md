# Render
```html
<main>
  <button>
    go
  </button>
  <script
    type="text/plain"
  >
    document.querySelector("main").dataset.b = ""
  </script>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-a="ran"
  data-b="ran"
>
  <button>
    go
  </button>
</main>
```
## Change
```
UPDATE: main[data-a] null => "ran"
UPDATE: main[data-b] null => "ran"
```
