# Render `{"label":"a"}`
```html
<main>
  <section>
    <button>
      a:0
    </button>
  </section>
</main>
```

# Update `{"label":"b"}`
```html
<main>
  <section>
    <button>
      b:0
    </button>
  </section>
</main>
```
## Change
```
UPDATE: main > section > button::text@0 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <button>
      b:1
    </button>
  </section>
</main>
```
## Change
```
UPDATE: main > section > button::text@2 "0" => "1"
```
