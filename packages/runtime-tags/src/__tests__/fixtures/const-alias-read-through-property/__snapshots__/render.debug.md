# Render `{"user":{"name":"Ada"}}`
```html
<div>
  1 {"a":1} Ada
</div>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  2 {"a":2} Ada
</div>
<button>
  inc
</button>
```
## Change
```
UPDATE: div::text@2 "{\"a\":1}" => "{\"a\":2}"
UPDATE: div::text@0 "1" => "2"
```
