# Render
```html
<button>
  0
</button>
```

# Update
```js
document.querySelector("button")?.click();
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
LOG "child effect"
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
UPDATE: div::text "0" => "1"
UPDATE: button::text "0" => "1"
```
