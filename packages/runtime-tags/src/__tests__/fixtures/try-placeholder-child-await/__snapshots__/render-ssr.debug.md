# Render
```html
<button>
  inc
</button>
loading changingloading staticloading inner
```

# Update
```html
<button>
  inc
</button>
0static0
```
## Change
```
REMOVE: ::text("loading changing")
INSERT: button + ::text("0")
REMOVE: ::text("loading static")
INSERT: ::text@0 + ::text("static")
REMOVE: ::text("loading inner")
INSERT: ::text@1 + ::text("0")
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  inc
</button>
loading changingstaticloading inner
```
## Change
```
INSERT: button + ::text("loading changing")
REMOVE: ::text@0 + ::text("0")
INSERT: ::text@16 + ::text("loading inner")
REMOVE: ::text@22 + ::text("0")
```

# Update
```html
<button>
  inc
</button>
1static1
```
## Change
```
INSERT: button + ::text("1")
REMOVE: ::text@0 + ::text("loading changing")
INSERT: ::text@1 + ::text("1")
REMOVE: ::text@7 + ::text("loading inner")
```
