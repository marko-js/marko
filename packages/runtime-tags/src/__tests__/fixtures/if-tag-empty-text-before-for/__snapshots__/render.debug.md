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
REMOVE: b
REMOVE: b
INSERT: ::text("none")
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
REMOVE: ::text("none")
INSERT: b:nth-of-type(1), b:nth-of-type(2)
```
