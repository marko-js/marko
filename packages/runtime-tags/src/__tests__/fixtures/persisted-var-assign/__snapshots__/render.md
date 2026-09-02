# Render `{"start":1}`
```html
<main>
  <span>
    box 1
  </span>
  <p>
    1
  </p>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <span>
    box 2
  </span>
  <p>
    2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text@4 "1" => "2"
UPDATE: main > p::text "1" => "2"
```

# Update `{"start":1}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <span>
    box 3
  </span>
  <p>
    3
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text@4 "2" => "3"
UPDATE: main > p::text "2" => "3"
```
