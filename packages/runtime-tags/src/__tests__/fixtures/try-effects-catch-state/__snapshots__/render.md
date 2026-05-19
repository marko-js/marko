# Render
```html
<div>
  0
</div>
<button>
  inc
</button>
--
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  1
</div>
<button>
  inc
</button>
--
```
## Change
```
REMOVE: div::text("0")
INSERT: div::text("1")
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  1
</div>
Error: ERROR!
```
## Change
```
INSERT: div + ::text("Error: ERROR!")
REMOVE: ::text + button
REMOVE: ::text + ::text(" -- ")
UPDATE: ::text " " => "Error: ERROR!"
```
