# Render `{"prefix":"h","level":2}`
```html
<h2>
  <button>
    0
  </button>
</h2>
```

# Update
```js
document.querySelector("button").click();
```
```html
<h2>
  <button>
    1
  </button>
</h2>
```
## Change
```
UPDATE: h2 > button::text "0" => "1"
```
