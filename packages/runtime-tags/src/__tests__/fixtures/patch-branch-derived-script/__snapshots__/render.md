# Render `{"show":false}`
```html
<main>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true}`
```html
<main
  data-seen="2"
>
  <p>
    Seen 2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text@5 "" => "2"
UPDATE: main[data-seen] null => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-seen="3"
>
  <p>
    Seen 3
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@5 "2" => "3"
UPDATE: main[data-seen] "2" => "3"
```
