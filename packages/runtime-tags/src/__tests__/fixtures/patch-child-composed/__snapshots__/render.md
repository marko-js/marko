# Render `{"title":"Store"}`
```html
<main>
  <section>
    <b>
      Store
    </b>
    <i>
      0
    </i>
  </section>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <b>
      Store
    </b>
    <i>
      1
    </i>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > i::text "0" => "1"
```

# Update `{"title":"Store!"}`
```html
<main>
  <section>
    <b>
      Store!
    </b>
    <i>
      1
    </i>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > b::text "Store" => "Store!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <b>
      Store!
    </b>
    <i>
      2
    </i>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > i::text "1" => "2"
```
