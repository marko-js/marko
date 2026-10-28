# Render `{"on":true,"x":"x","title":"t"}`
```html
<button>
  s
</button>
Ax
<span>
  t
</span>
```

# Update `{"on":false,"x":"x","title":"t"}`
```html
<button>
  s
</button>
B0
<span>
  t
</span>
```
## Change
```
INSERT: button + :is(::text("B"), ::text("0"))
REMOVE: ::text@1 + ::text("A")
REMOVE: ::text@1 + ::text("x")
UPDATE: ::text@1 "" => "0"
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  s
</button>
B1
<span>
  t
</span>
```
## Change
```
UPDATE: ::text@1 "0" => "1"
```

# Update `{"on":true,"x":"y","title":"u"}`
```html
<button>
  s
</button>
Ay
<span>
  u
</span>
```
## Change
```
INSERT: button + :is(::text("A"), ::text("y"))
REMOVE: ::text@1 + ::text("B")
REMOVE: ::text@1 + ::text("1")
UPDATE: ::text@1 "" => "y"
UPDATE: span::text "t" => "u"
```

# Update
```js
d.querySelector("button").click();
```
