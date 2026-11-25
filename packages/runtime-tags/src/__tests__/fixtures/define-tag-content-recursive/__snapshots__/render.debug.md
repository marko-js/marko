# Render `{"label":"x"}`
```html
<button>
  2
</button>
```

# Update
```js
document.querySelectorAll("button")[0].click();
```
```html
<button>
  2
</button>
leaf x
<button>
  1
</button>
```
## Change
```
INSERT: ::text("leaf "), ::text("x")
UPDATE: ::text@5 "" => "x"
INSERT: button:nth-of-type(2)
UPDATE: button:nth-of-type(2)::text " " => "1"
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<button>
  2
</button>
leaf x
<button>
  1
</button>
2: leaf x
<button>
  0
</button>
```
## Change
```
INSERT: ::text("2"), ::text(": ")
UPDATE: ::text@6 "" => "2"
INSERT: ::text("leaf "), ::text("x")
UPDATE: ::text@14 "" => "x"
INSERT: button:nth-of-type(3)
UPDATE: button:nth-of-type(3)::text " " => "0"
```

# Update
```js
document.querySelectorAll("button")[2].click();
```
```html
<button>
  2
</button>
leaf x
<button>
  1
</button>
2: leaf x
<button>
  0
</button>
1: 2: leaf x
```
## Change
```
INSERT: ::text("1"), ::text(": ")
UPDATE: ::text@15 "" => "1"
INSERT: ::text("2"), ::text(": ")
UPDATE: ::text@18 "" => "2"
INSERT: ::text("leaf "), ::text("x")
UPDATE: ::text@26 "" => "x"
```
