# Render `{"$global":{"brand":"Acme","serializedGlobals":["brand"]}}`
```html
<main>
  <section>
    <span>
      0
    </span>
    <div>
      Acme
    </div>
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
    <span>
      1
    </span>
    <div>
      Acme
    </div>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > span::text "0" => "1"
```

# Update `{"$global":{"brand":"Zed","serializedGlobals":["brand"]}}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <span>
      2
    </span>
    <div>
      Acme
    </div>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > span::text "1" => "2"
```
