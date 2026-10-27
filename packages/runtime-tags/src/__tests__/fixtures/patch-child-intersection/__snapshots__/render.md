# Render `{"title":"Cart","label":"Widget"}`
```html
<main>
  <h1>
    Cart
  </h1>
  <div>
    <h2>
      Widget x1
    </h2>
    <button>
      +
    </button>
  </div>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Cart
  </h1>
  <div>
    <h2>
      Widget x2
    </h2>
    <button>
      +
    </button>
  </div>
</main>
```
## Change
```
UPDATE: main > div > h2::text "Widget x1" => "Widget x2"
```

# Update `{"title":"Cart!","label":"Gadget"}`
```html
<main>
  <h1>
    Cart!
  </h1>
  <div>
    <h2>
      Gadget x2
    </h2>
    <button>
      +
    </button>
  </div>
</main>
```
## Change
```
UPDATE: main > h1::text "Cart" => "Cart!"
UPDATE: main > div > h2::text "Widget x2" => "Gadget x2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Cart!
  </h1>
  <div>
    <h2>
      Gadget x3
    </h2>
    <button>
      +
    </button>
  </div>
</main>
```
## Change
```
UPDATE: main > div > h2::text "Gadget x2" => "Gadget x3"
```
