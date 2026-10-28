# Render `{"x":1,"y":"y"}`
```html
<button
  class="s"
>
  s
</button>
Ay
```

# Update `{"x":2,"y":"y"}`
```html
<button
  class="s"
>
  s
</button>
B0
```
## Change
```
INSERT: .s + :is(::text("B"), ::text("0"))
REMOVE: ::text@1 + ::text("A")
REMOVE: ::text@1 + ::text("y")
UPDATE: ::text@1 "" => "0"
```

# Update
```js
d.querySelector(".s").click();
```
```html
<button
  class="s"
>
  s
</button>
B1
```
## Change
```
UPDATE: ::text@1 "0" => "1"
```

# Update `{"x":1,"y":"z"}`
```html
<button
  class="s"
>
  s
</button>
Az
```
## Change
```
INSERT: .s + :is(::text("A"), ::text("z"))
REMOVE: ::text@1 + ::text("B")
REMOVE: ::text@1 + ::text("1")
UPDATE: ::text@1 "" => "z"
```

# Update
```js
d.querySelector(".s").click();
```

# Update `{"x":2,"y":"z"}`
```html
<button
  class="s"
>
  s
</button>
B2
```
## Change
```
INSERT: .s + :is(::text("B"), ::text("2"))
REMOVE: ::text@1 + ::text("A")
REMOVE: ::text@1 + ::text("z")
UPDATE: ::text@1 "" => "2"
```
