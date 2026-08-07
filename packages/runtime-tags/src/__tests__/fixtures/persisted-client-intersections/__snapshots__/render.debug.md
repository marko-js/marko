# Render `{"title":"Store","label":"Widget","year":2026,"$global":{"brand":"Acme","locale":"en"}}`
```html
<main>
  <h1>
    Store
  </h1>
  <p
    title="en"
  >
    Acme
  </p>
  <section>
    <h2>
      Widget x1
    </h2>
    <button>
      +
    </button>
  </section>
  <aside>
    Sale (0)
  </aside>
  <button
    class="promo"
  >
    seen
  </button>
  <footer>
    2026
  </footer>
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
  <p
    title="en"
  >
    Acme
  </p>
  <section>
    <h2>
      Widget x2
    </h2>
    <button>
      +
    </button>
  </section>
  <aside>
    Sale (0)
  </aside>
  <button
    class="promo"
  >
    seen
  </button>
  <footer>
    2026
  </footer>
</main>
```
## Change
```
UPDATE: main > section > h2::text "Widget x1" => "Widget x2"
```

# Update `{"title":"Store!","label":"Gadget","year":2027,"$global":{"brand":"Acme Co","locale":"fr"}}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p
    title="fr"
  >
    Acme Co
  </p>
  <section>
    <h2>
      Gadget x2
    </h2>
    <button>
      +
    </button>
  </section>
  <aside>
    Sale (0)
  </aside>
  <button
    class="promo"
  >
    seen
  </button>
  <footer>
    2027
  </footer>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
UPDATE: main > p[title] "en" => "fr"
UPDATE: main > p::text "Acme" => "Acme Co"
UPDATE: main > footer::text "2026" => "2027"
UPDATE: main > section > h2::text "Widget x2" => "Gadget x2"
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
  <p
    title="fr"
  >
    Acme Co
  </p>
  <section>
    <h2>
      Gadget x3
    </h2>
    <button>
      +
    </button>
  </section>
  <aside>
    Sale (0)
  </aside>
  <button
    class="promo"
  >
    seen
  </button>
  <footer>
    2027
  </footer>
</main>
```
## Change
```
UPDATE: main > section > h2::text "Gadget x2" => "Gadget x3"
```
