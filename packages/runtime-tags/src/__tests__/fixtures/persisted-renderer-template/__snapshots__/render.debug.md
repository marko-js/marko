# Render `{"kind":"div"}`
```html
<main>
  <section>
    <div />
  </section>
  <button>
    0
  </button>
</main>
```

# Update `{"kind":"banner"}`
```html
<main>
  <section>
    <b>
      banner
    </b>
  </section>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > section > b
REMOVE: main > section > b + div
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <b>
      banner
    </b>
  </section>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"kind":"span"}`
```html
<main>
  <section>
    <span />
  </section>
  <button>
    1
  </button>
</main>
```
## Change
```
INSERT: main > section > span
REMOVE: main > section > span + b
```

# Update `{"kind":"banner"}`
```html
<main>
  <section>
    <b>
      banner
    </b>
  </section>
  <button>
    1
  </button>
</main>
```
## Change
```
INSERT: main > section > b
REMOVE: main > section > b + span
```
