# Render `{"label":"Store"}`
```html
<main>
  <p>
    Store x0
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
  <p>
    Store x1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@7 "0" => "1"
```

# Update `{"label":"Store!"}`
```html
<main>
  <p>
    Store! x1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@0 "Store" => "Store!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    Store! x2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@8 "1" => "2"
```
