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
INSERT: button + :is(::text("outer "), ::text("hi"), ::text(": "))
UPDATE: ::text@6 "" => "hi"
INSERT: ::text@8 + :is(::text("label: "), ::text("hi"))
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
REMOVE: button + ::text("outer ")
REMOVE: button + ::text("hi")
REMOVE: button + ::text(": ")
REMOVE: button + ::text("label: ")
REMOVE: button + ::text("hi")
```
