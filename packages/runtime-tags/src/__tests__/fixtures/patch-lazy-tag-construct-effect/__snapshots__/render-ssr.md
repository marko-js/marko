# Render `{"show":false,"label":"a","attrs":{"title":"t"}}`
```html
<main />
```

# Update `{"show":true,"label":"a","attrs":{"title":"t"}}`
```html
<main>
  <div
    title="t"
  >
    x
  </div>
  <button>
    a:0
  </button>
</main>
```
## Change
```
INSERT: main > :is(div, button)
UPDATE: main > button::text@0 "" => "a"
UPDATE: main > button::text@2 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div
    title="t"
  >
    x
  </div>
  <button>
    a:1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@2 "0" => "1"
```
