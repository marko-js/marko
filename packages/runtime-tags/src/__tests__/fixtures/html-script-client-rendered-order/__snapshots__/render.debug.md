# Render `{"n":"first"}`
```html
<main
  data-ran=""
>
  <button>
    show
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-ran=" first static child row1 row2 last"
  data-seen=" first static child row1 row2 last"
>
  <button>
    show
  </button>
</main>
```
## Change
```
UPDATE: main[data-ran] "" => " first static child row1 row2 last"
UPDATE: main[data-ran] " first" => " first static child row1 row2 last"
UPDATE: main[data-ran] " first static" => " first static child row1 row2 last"
UPDATE: main[data-ran] " first static child" => " first static child row1 row2 last"
UPDATE: main[data-ran] " first static child row1" => " first static child row1 row2 last"
UPDATE: main[data-ran] " first static child row1 row2" => " first static child row1 row2 last"
UPDATE: main[data-seen] null => " first static child row1 row2 last"
```
