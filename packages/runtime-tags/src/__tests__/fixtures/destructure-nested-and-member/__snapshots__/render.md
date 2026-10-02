# Render
```html
<div>
  1 2
</div>
<button>
  update
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  3 4
</div>
<button>
  update
</button>
```
## Change
```
UPDATE: div::text@2 "2" => "4"
UPDATE: div::text@0 "1" => "3"
```
