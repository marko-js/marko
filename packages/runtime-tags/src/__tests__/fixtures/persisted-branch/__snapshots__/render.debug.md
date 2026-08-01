# Render `{"title":"Store","promo":"Sale"}`
```html
<main>
  <h1>
    Store
  </h1>
  <aside>
    Sale
  </aside>
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
  <aside>
    Sale
  </aside>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "0" => "1"
```

# Update `{"title":"Store","promo":"Big Sale"}`
```html
<main>
  <h1>
    Store
  </h1>
  <aside>
    Big Sale
  </aside>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
UPDATE: main > aside::text "Sale" => "Big Sale"
```

# Update `{"title":"Store!","promo":""}`
```html
<main>
  <h1>
    Store!
  </h1>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
REMOVE: main > h1 + aside
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
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "1" => "2"
```

# Update `{"title":"Store!","promo":"Back"}`
```html
<main>
  <h1>
    Store!
  </h1>
  <aside>
    Back
  </aside>
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
INSERT: main > h1 + aside
UPDATE: main > aside::text " " => "Back"
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
  <aside>
    Back
  </aside>
  <button>
    Count 3
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "2" => "3"
```
