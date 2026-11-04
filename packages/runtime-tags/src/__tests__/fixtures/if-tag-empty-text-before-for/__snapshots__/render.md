# Render
```html
<b>
  1
</b>
<b>
  2
</b>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
none
<button>
  toggle
</button>
```
## Change
```
INSERT: ::text("none")
REMOVE: ::text + b
REMOVE: ::text + b
```

# Update
```js
document.querySelector("button").click();
```
```html
<b>
  1
</b>
<b>
  2
</b>
<button>
  toggle
</button>
```
## Change
```
INSERT: b, b
REMOVE: b:nth-of-type(2) + ::text("none")
```
