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
INSERT: button
INSERT: button:nth-of-type(1) + :is(::text("leaf "), ::text("x"))
UPDATE: button:nth-of-type(2)::text " " => "1"
UPDATE: ::text@5 "" => "x"
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
INSERT: button
INSERT: button:nth-of-type(2) + :is(::text("2"), ::text(": "))
UPDATE: button:nth-of-type(3)::text " " => "0"
UPDATE: ::text@6 "" => "2"
INSERT: ::text@7 + :is(::text("leaf "), ::text("x"))
UPDATE: ::text@14 "" => "x"
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
INSERT: button:nth-of-type(3) + :is(::text("1"), ::text(": "))
UPDATE: ::text@15 "" => "1"
INSERT: ::text@16 + :is(::text("2"), ::text(": "))
UPDATE: ::text@18 "" => "2"
INSERT: ::text@19 + :is(::text("leaf "), ::text("x"))
UPDATE: ::text@26 "" => "x"
```
