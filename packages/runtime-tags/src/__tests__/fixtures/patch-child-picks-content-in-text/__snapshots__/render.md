# Render `{"on":true,"x":"x","title":"t"}`
```html
<button>
  s
</button>
<div>
  tAx
</div>
```

# Update `{"on":false,"x":"x","title":"t"}`
```html
<button>
  s
</button>
<div>
  tB0
</div>
```
## Change
```
INSERT: div::text@0 + :is(::text("B"), ::text("0"))
REMOVE: div::text@2 + ::text("A")
REMOVE: div::text@2 + ::text("x")
UPDATE: div::text@2 "" => "0"
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  s
</button>
<div>
  tB1
</div>
```
## Change
```
UPDATE: div::text@2 "0" => "1"
```

# Update `{"on":true,"x":"y","title":"u"}`
```html
<button>
  s
</button>
<div>
  uAy
</div>
```
## Change
```
UPDATE: div::text@0 "t" => "u"
INSERT: div::text@0 + :is(::text("A"), ::text("y"))
REMOVE: div::text@2 + ::text("B")
REMOVE: div::text@2 + ::text("1")
UPDATE: div::text@2 "" => "y"
```

# Update
```js
d.querySelector("button").click();
```
