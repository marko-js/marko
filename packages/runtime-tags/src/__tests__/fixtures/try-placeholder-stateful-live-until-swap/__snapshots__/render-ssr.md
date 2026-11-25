# Render
```html
<button>
  loading 0
</button>
```
## Console
```
LOG "placeholder mounted"
```

# Update
```js
document.querySelector("button")?.click();
```
```html
<button>
  loading 1
</button>
```
## Change
```
UPDATE: button::text@8 "0" => "1"
```

# Update
```html
<button>
  loaded 1
</button>
```
## Change
```
REMOVE: button
INSERT: button
INSERT: button::text("loaded ")
INSERT: button::text("1")
UPDATE: button::text@7 "0" => "1"
```
## Console
```
LOG "placeholder destroyed"
```

# Update
```js
document.querySelector("button")?.click();
```
```html
<button>
  loaded 2
</button>
```
## Change
```
UPDATE: button::text@7 "1" => "2"
```
