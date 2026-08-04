# Render `{"title":"Store","promo":"Sale"}`
```html
<main>
  <h1>
    Store
  </h1>
  <aside
    class="promo banner"
  >
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
  <aside
    class="promo banner"
  >
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
  <aside
    class="promo banner"
  >
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
UPDATE: .promo.banner::text "Sale" => "Big Sale"
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
  <aside
    class="promo banner"
  >
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
INSERT: main > h1 + .promo.banner
UPDATE: .promo.banner::text " " => "Back"
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
  <aside
    class="promo banner"
  >
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
