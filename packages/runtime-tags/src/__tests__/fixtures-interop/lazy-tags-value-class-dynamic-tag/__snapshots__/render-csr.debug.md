# Render
```html
<div />
```

# Update
```html
<div>
  <button>
    x 0
  </button>
</div>
```
## Change
```
INSERT: div > button
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <button>
    x 1
  </button>
</div>
```
## Change
```
UPDATE: div > button::text@2 "0" => "1"
```
