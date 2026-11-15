# Render
```html
01
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: ::text("0")
REMOVE: ::text("1")
```

# Update
```js
document.querySelector("button").click();
```
```html
01
<button>
  toggle
</button>
```
## Change
```
INSERT: ::text("0")
INSERT: ::text@0 + ::text("1")
```
