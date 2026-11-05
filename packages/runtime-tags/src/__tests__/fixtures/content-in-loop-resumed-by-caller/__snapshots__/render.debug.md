# Render
```html
<div>
  00
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
  111
</div>
<button>
  inc
</button>
```
## Change
```
UPDATE: div::text@0 "0" => "1"
UPDATE: div::text@1 "0" => "1"
INSERT: div::text@1 + ::text("1")
UPDATE: div::text@2 " " => "1"
```
