# Render `{"label":"a"}`
```html
<main>
  <section>
    <p>
      a:0
    </p>
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
    <p>
      a:1
    </p>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text "a:0" => "a:1"
```

# Update `{"label":"b"}`
```html
<main>
  <section>
    <p>
      b:1
    </p>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text "a:1" => "b:1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <p>
      b:2
    </p>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text "b:1" => "b:2"
```
