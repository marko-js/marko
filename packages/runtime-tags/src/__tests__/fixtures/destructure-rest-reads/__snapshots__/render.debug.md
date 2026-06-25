# Render
```html
<div>
  1|2|3|2
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
  4|5||1
</div>
<button>
  update
</button>
```
## Change
```
UPDATE: div::text@5 "2" => "1"
UPDATE: div::text@0 "1" => "4"
UPDATE: div::text@2 "2" => "5"
UPDATE: div::text "3" => ""
```
