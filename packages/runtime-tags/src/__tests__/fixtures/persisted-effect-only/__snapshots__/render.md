# Render
```html
<main>
  <h1>
    Static title
  </h1>
  <button>
    Count 0
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Static title
  </h1>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Static title
  </h1>
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "1" => "2"
```
