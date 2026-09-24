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
INSERT: button::text("0")
REMOVE: ::text("loading button")
INSERT: button
```

# Update
```js
document.querySelector("button").click();
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
INSERT: button + div
INSERT: div::text("0")
```
## Console
```
LOG "button effect"
LOG "effect 0"
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
UPDATE: div::text "0" => "1"
UPDATE: button::text "0" => "1"
```
## Console
```
LOG "effect 1"
```
