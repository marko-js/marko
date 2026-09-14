# Render `{"title":"Store","a":true,"b":true}`
```html
<main>
  <h1>
    Store
  </h1>
  <p
    class="pa"
  >
    A 0
  </p>
  <button
    class="ba"
  >
    +
  </button>
  <p
    class="pb"
  >
    B 10
  </p>
  <button
    class="bb"
  >
    +
  </button>
</main>
```

# Update
```js
document.querySelector(sel).click();
```
```html
<main>
  <h1>
    Store
  </h1>
  <p
    class="pa"
  >
    A 1
  </p>
  <button
    class="ba"
  >
    +
  </button>
  <p
    class="pb"
  >
    B 10
  </p>
  <button
    class="bb"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: .pa::text@2 "0" => "1"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<main>
  <h1>
    Store
  </h1>
  <p
    class="pa"
  >
    A 1
  </p>
  <button
    class="ba"
  >
    +
  </button>
  <p
    class="pb"
  >
    B 11
  </p>
  <button
    class="bb"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: .pb::text@2 "10" => "11"
```

# Update `{"title":"Store!","a":true,"b":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p
    class="pa"
  >
    A 1
  </p>
  <button
    class="ba"
  >
    +
  </button>
  <p
    class="pb"
  >
    B 11
  </p>
  <button
    class="bb"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
```

# Update `{"title":"Store!","a":false,"b":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p
    class="pb"
  >
    B 11
  </p>
  <button
    class="bb"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
REMOVE: main > h1 + p
REMOVE: main > h1 + button
```

# Update `{"title":"Store!","a":true,"b":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p
    class="pa"
  >
    A 0
  </p>
  <button
    class="ba"
  >
    +
  </button>
  <p
    class="pb"
  >
    B 11
  </p>
  <button
    class="bb"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
INSERT: main > h1 + :is(.pa, .ba)
UPDATE: .pa::text@2 "" => "0"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<main>
  <h1>
    Store!
  </h1>
  <p
    class="pa"
  >
    A 1
  </p>
  <button
    class="ba"
  >
    +
  </button>
  <p
    class="pb"
  >
    B 11
  </p>
  <button
    class="bb"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: .pa::text@2 "0" => "1"
```
