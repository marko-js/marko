# Render `{"$global":{"locale":"en","serializedGlobals":["locale"]}}`
```html
<main>
  <span>
    en
  </span>
  <p>
    2
  </p>
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
  <span>
    en
  </span>
  <p>
    4
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "2" => "4"
```

# Update `{"$global":{"locale":"fr","serializedGlobals":["locale"]}}`
```html
<main>
  <span>
    fr
  </span>
  <p>
    4
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text "en" => "fr"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <span>
    fr
  </span>
  <p>
    6
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "4" => "6"
```
