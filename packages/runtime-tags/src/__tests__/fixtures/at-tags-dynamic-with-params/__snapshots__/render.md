# Render
```html
y: 1
<button>
  Toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
```
## Change
```
REMOVE: ::text("y: ")
REMOVE: ::text("1")
```

# Update
```js
document.querySelector("button").click();
```
```html
y: 1
<button>
  Toggle
</button>
```
## Change
```
INSERT: ::text("y: "), ::text("1")
UPDATE: ::text@3 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
```
## Change
```
REMOVE: ::text("y: ")
REMOVE: ::text("1")
```
