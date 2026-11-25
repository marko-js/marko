# Render
```html
loading button
```

# Update
```html
<button>
  0
</button>
```
## Change
```
REMOVE: ::text("loading button")
INSERT: button
INSERT: button::text("0")
```

# Update
```html
<button>
  0
</button>
<div>
  0
</div>
```
## Change
```
INSERT: div
INSERT: div::text("0")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<div>
  1
</div>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: div::text "0" => "1"
```
