# Render `{"$global":{"cspNonce":"n1","serializedGlobals":{"cspNonce":true}}}`
```html
<main>
  <button>
    show
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-nonce="n1"
  data-ran="1"
>
  <button>
    show
  </button>
</main>
```
## Change
```
INSERT: main > button + style
UPDATE: main > style[data-x] null => "1"
UPDATE: main[data-ran] null => "1"
UPDATE: main[data-nonce] null => "n1"
INSERT: main > style::text("p { color: red }")
```
