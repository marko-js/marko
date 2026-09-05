# Render `{"show":true,"title":"a"}`
```html
<main>
  <p>
    a!
  </p>
  <button>
    c
  </button>
</main>
```

# Update `{"show":true,"title":"b"}`
```html
<main>
  <p>
    b!
  </p>
  <button>
    c
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "a!" => "b!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-clicked="b!"
>
  <p>
    b!
  </p>
  <button>
    c
  </button>
</main>
```
## Change
```
UPDATE: main[data-clicked] null => "b!"
```
