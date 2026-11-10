# Render
```html
<div>
  <button>
    count:0
  </button>
</div>
```
## Console
```
LOG "grand-child"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <button>
    count:1
  </button>
</div>
```
## Change
```
UPDATE: div > button::text@6 "0" => "1"
```
