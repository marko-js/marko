# Render `{"n":1}`
```html
<main>
  <button>
    bump
  </button>
  <p>
    1
  </p>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    bump
  </button>
  <p>
    2
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "1" => "2"
```

# Update `{"n":10}`
```html
<main>
  <button>
    bump
  </button>
  <p>
    11
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "2" => "11"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    bump
  </button>
  <p>
    12
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "11" => "12"
```
