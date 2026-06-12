# Render
```html
<div>
  1|2
</div>
<button>
  update
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  4|
</div>
<button>
  update
</button>
```
## Change
```
UPDATE: div::text@0 "1" => "4"
```
