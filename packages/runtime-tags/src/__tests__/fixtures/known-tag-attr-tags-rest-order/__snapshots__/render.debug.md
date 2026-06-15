# Render
```html
<button>
  inc 1
</button>
<div>
  1:row,other
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc 2
</button>
<div>
  2:row,other
</div>
```
## Change
```
UPDATE: button::text@4 "1" => "2"
UPDATE: div::text@0 "1" => "2"
```
