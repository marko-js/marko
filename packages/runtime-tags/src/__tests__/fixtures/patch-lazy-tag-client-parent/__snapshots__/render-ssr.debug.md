# Render `{"show":true,"label":"a"}`
```html
<main />
```

# Update
```html
<main>
  <section />
</main>
```
## Change
```
INSERT: main > section
```

# Update
```html
<main>
  <section>
    <button>
      a:0
    </button>
  </section>
</main>
```
## Change
```
INSERT: main > section > button
```

# Update `{"show":true,"label":"b"}`
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
document.querySelector("main button").click();
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
