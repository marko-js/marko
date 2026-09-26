# Render
```html
<div>
  before
</div>
```

# Update
```html
<div>
  before
</div>
<button>
  0:10
</button>
```
## Change
```
INSERT: div + button
INSERT: button::text("0")
INSERT: button::text@0 + ::text(":10")
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  before
</div>
<button>
  1:10
</button>
```
## Change
```
UPDATE: button::text@0 "0" => "1"
```
