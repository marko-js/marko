# Render `{"$global":{"cspNonce":"n1","serializedGlobals":{"cspNonce":true}}}`
```html
<main>
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
<main
  data-in-place="true"
  data-nonce="n1"
  data-ran="1"
>
  <button>
    toggle
  </button>
</main>
```
## Change
```
UPDATE: main[data-ran] null => "1"
UPDATE: main[data-nonce] null => "n1"
UPDATE: main[data-in-place] null => "true"
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-in-place="true"
  data-nonce="n1"
  data-ran="2"
>
  <button>
    toggle
  </button>
</main>
```
## Change
```
UPDATE: main[data-ran] "1" => "2"
UPDATE: main[data-nonce] "n1" => "n1"
UPDATE: main[data-in-place] "true" => "true"
```
