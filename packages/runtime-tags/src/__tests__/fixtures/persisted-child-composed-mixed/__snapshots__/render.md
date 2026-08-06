# Render `{"base":1}`
```html
<main>
  <section>
    <b>
      1
    </b>
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
      2
    </b>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > b::text "1" => "2"
```

# Update `{"base":10}`
```html
<main>
  <section>
    <b>
      11
    </b>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > b::text "2" => "11"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <b>
      12
    </b>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > b::text "11" => "12"
```
