# Render
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
    1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text@4 "1" => "2"
```

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
    1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text@4 "2" => "3"
```
