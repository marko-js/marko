# Render `{"show":true,"start":5}`
```html
<main>
  <p>
    last 0
  </p>
  <button>
    5
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    last 6
  </p>
  <button>
    5
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@5 "0" => "6"
```

# Update `{"show":true,"start":7}`
```html
<main>
  <p>
    last 6
  </p>
  <button>
    7
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "5" => "7"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    last 8
  </p>
  <button>
    7
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@5 "6" => "8"
```
