# Render
```html
ab
<button>
  fail
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
01
<button>
  fail
</button>
```
## Change
```
INSERT: ::text("0")
REMOVE: ::text@0 + ::text("a")
INSERT: ::text@0 + ::text("1")
REMOVE: ::text@1 + ::text("b")
UPDATE: ::text@0 " " => "0"
UPDATE: ::text@1 " " => "1"
```
