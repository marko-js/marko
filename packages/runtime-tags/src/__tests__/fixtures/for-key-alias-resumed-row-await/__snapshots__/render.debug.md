# Render
```html
<button>
  show
</button>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
a:0b:1
<button>
  show
</button>
```
## Change
```
INSERT: ::text("a"), ::text(":"), ::text("0")
UPDATE: ::text@0 "" => "a"
INSERT: ::text("b"), ::text(":"), ::text("1")
UPDATE: ::text@3 "" => "b"
```
