# Render `{"label":"a"}`
```html
<main>
  <section>
    <p
      title="a:0"
    >
      value
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
    <p
      title="a:1"
    >
      value
    </p>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > p[title] "a:0" => "a:1"
```

# Update `{"label":"b"}`
```html
<main>
  <section>
    <p
      title="b:1"
    >
      value
    </p>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > p[title] "a:1" => "b:1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <p
      title="b:2"
    >
      value
    </p>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > p[title] "b:1" => "b:2"
```
