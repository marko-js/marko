# Render `{"title":"Cart","label":"Gadget"}`
```html
<div>
  <h2>
    Gadget x1
  </h2>
  <button
    class="bump"
  >
    +
  </button>
</div>
<main>
  <h1>
    Cart
  </h1>
  <button
    class="read"
  >
    read
  </button>
</main>
```

# Update
```js
document.querySelector("button.bump").click();
```
```html
<div>
  <h2>
    Gadget x2
  </h2>
  <button
    class="bump"
  >
    +
  </button>
</div>
<main>
  <h1>
    Cart
  </h1>
  <button
    class="read"
  >
    read
  </button>
</main>
```
## Change
```
UPDATE: div > h2::text "Gadget x1" => "Gadget x2"
```

# Update `{"title":"Cart!","label":"Widget"}`
```html
<div>
  <h2>
    Widget x2
  </h2>
  <button
    class="bump"
  >
    +
  </button>
</div>
<main>
  <h1>
    Cart!
  </h1>
  <button
    class="read"
  >
    read
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Cart" => "Cart!"
UPDATE: div > h2::text "Gadget x2" => "Widget x2"
```
