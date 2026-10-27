# Render `{"show":true,"b":10}`
```html
<main>
  <p>
    11
  </p>
  <button>
    inc
  </button>
</main>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <p>
    12
  </p>
  <button>
    inc
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "11" => "12"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <p>
    13
  </p>
  <button>
    inc
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "12" => "13"
```
