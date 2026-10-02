# Render
```html
<div>
  1 {"c":2} {"d":3}
</div>
<div>
  3 4 5+6
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
  4 {"c":5} {"d":6}
</div>
<div>
  6 4 5+6
</div>
<button>
  update
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)::text@10 "{\"d\":3}" => "{\"d\":6}"
UPDATE: div:nth-of-type(2)::text@0 "3" => "6"
UPDATE: div:nth-of-type(1)::text@2 "{\"c\":2}" => "{\"c\":5}"
UPDATE: div:nth-of-type(1)::text@0 "1" => "4"
```
