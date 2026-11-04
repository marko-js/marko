# Render `{"show":false}`
```html
<div>
  x0
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
  x1
</div>
<button>
  inc
</button>
```
## Change
```
UPDATE: div::text@1 "0" => "1"
```
