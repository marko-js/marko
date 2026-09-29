# Render `{"title":"Store","promise":{}}`
```html
<main>
  <h1>
    Store
  </h1>
  <em>
    hi
  </em>
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
    Store
  </h1>
  <em>
    hi
  </em>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "0" => "1"
```

# Update `{"title":"Store!","promise":{}}`
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    bye
  </em>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
UPDATE: main > em::text "hi" => "bye"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    bye
  </em>
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "1" => "2"
```
