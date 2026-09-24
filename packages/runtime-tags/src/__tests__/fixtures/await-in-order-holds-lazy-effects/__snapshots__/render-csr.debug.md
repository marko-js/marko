# Render

# Update
```js
document.querySelector("button")?.click();
```

# Update
```html
<button>
  0
</button>
```
## Change
```
INSERT: button
```
## Console
```
LOG "child effect"
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
UPDATE: div::text " " => "0"
```

# Update
```js
document.querySelector("button")?.click();
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
