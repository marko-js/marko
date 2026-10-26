# Render `{"show":false,"b":10}`
```html
<main>
  <button>
    inc
  </button>
</main>
```

# Update `{"show":true,"b":10}`
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
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "11"
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

# Update `{"show":true,"b":20}`
```html
<main>
  <p>
    22
  </p>
  <button>
    inc
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "12" => "22"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <p>
    23
  </p>
  <button>
    inc
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "22" => "23"
```
