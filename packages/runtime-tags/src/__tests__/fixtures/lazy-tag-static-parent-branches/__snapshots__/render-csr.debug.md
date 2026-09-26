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
UPDATE: button::text@2 "" => "10"
UPDATE: button::text@0 "" => "0"
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
