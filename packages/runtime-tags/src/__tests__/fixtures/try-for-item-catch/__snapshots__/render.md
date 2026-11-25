# Render
```html
<div>
  0
</div>
<button>
  inc
</button>
-- --
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  1
</div>
<button>
  inc
</button>
-- --
```
## Change
```
REMOVE: div::text("0")
INSERT: div::text("1")
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  1
</div>
Error: ERROR!
```
## Change
```
REMOVE: ::text("-- ")
REMOVE: ::text("-- ")
REMOVE: button
INSERT: ::text("Error: ERROR!")
UPDATE: ::text " " => "Error: ERROR!"
```
