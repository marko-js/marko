# Render
```html
<button>
  inc 1
</button>
<div>
  1
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
  2
</div>
```
## Change
```
UPDATE: button::text@4 "1" => "2"
UPDATE: div::text "1" => "2"
```
