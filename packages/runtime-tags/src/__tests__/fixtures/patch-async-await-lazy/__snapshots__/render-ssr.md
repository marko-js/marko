# Render `{"title":"Store","related":"hats","note":"ready","slow":false}`
```html
<main>
  <h1>
    Store
  </h1>
  <section>
    <em>
      hats
    </em>
  </section>
  <footer>
    <span>
      ready
    </span>
  </footer>
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
  <section>
    <em>
      hats
    </em>
  </section>
  <footer>
    <span>
      ready
    </span>
  </footer>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "0" => "1"
```

# Update `{"title":"Store!","related":"boots","note":"backordered","slow":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <section>
    loading
  </section>
  <footer />
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
INSERT: main > section::text("loading")
REMOVE: main > section::text + em
REMOVE: main > footer > span
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
  <section>
    loading
  </section>
  <footer />
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "1" => "2"
```

# Update `{"title":"Store!","related":"boots","note":"backordered","slow":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <section>
    <em>
      boots
    </em>
  </section>
  <footer />
  <button>
    Count 2
  </button>
</main>
```
## Change
```
INSERT: main > section > em
REMOVE: main > section > em + ::text("loading")
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
  <section>
    <em>
      boots
    </em>
  </section>
  <footer />
  <button>
    Count 3
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "2" => "3"
```

# Update `{"title":"Store!","related":"boots","note":"backordered","slow":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <section>
    <em>
      boots
    </em>
  </section>
  <footer>
    <span>
      backordered
    </span>
  </footer>
  <button>
    Count 3
  </button>
</main>
```
## Change
```
INSERT: main > footer > span
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
  <section>
    <em>
      boots
    </em>
  </section>
  <footer>
    <span>
      backordered
    </span>
  </footer>
  <button>
    Count 4
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "3" => "4"
```
