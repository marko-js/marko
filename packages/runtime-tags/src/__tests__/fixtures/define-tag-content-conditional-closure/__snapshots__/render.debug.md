# Render `{"label":"hi"}`
```html
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
label: hi
```
## Change
```
INSERT: ::text("label: "), ::text("hi")
UPDATE: ::text@7 "" => "hi"
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
REMOVE: ::text("hi")
REMOVE: ::text("label: ")
```
