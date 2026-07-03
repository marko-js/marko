# Render `{"title":"Home","$global":{"persisted":true}}`
```html
<header>
  <button>
    Menu
  </button>
</header>
<main>
  <h1>
    Home
  </h1>
  <button
    class="inc"
  >
    0
  </button>
</main>
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<header>
  <button>
    Menu
  </button>
</header>
<main>
  <h1>
    Home
  </h1>
  <button
    class="inc"
  >
    1
  </button>
</main>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```

# Update `{"title":"About","$global":{"persisted":true}}`

# Update
```js
container.querySelector("button.inc").click();
```
```html
<header>
  <button>
    Menu
  </button>
</header>
<main>
  <h1>
    Home
  </h1>
  <button
    class="inc"
  >
    2
  </button>
</main>
```
## Change
```
UPDATE: .inc::text "1" => "2"
```
