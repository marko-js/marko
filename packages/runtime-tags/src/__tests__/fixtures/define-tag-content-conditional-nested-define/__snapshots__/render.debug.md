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
outer hi: label: hi
```
## Change
```
INSERT: ::text("outer "), ::text("hi"), ::text(": ")
UPDATE: ::text@6 "" => "hi"
INSERT: ::text("label: "), ::text("hi")
UPDATE: ::text@17 "" => "hi"
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
REMOVE: ::text(": ")
REMOVE: ::text("hi")
REMOVE: ::text("hi")
REMOVE: ::text("label: ")
REMOVE: ::text("outer ")
```
