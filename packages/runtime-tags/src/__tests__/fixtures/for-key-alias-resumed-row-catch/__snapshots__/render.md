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
REMOVE: ::text("a")
REMOVE: ::text("b")
INSERT: ::text("0")
UPDATE: ::text@0 " " => "0"
INSERT: ::text("1")
UPDATE: ::text@1 " " => "1"
```
