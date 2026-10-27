# Render `{"show":true,"first":"a1","second":"a2"}`
```html
<main>
  <section>
    <p>
      a1
    </p>
  </section>
  <button>
    toggle
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
      a2
    </p>
  </section>
  <button>
    toggle
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text "a1" => "a2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <p>
      a1
    </p>
  </section>
  <button>
    toggle
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text "a2" => "a1"
```
