# Render
```html
<button>
  increment
</button>
<p>
  1 * 2 = 
</p>
```

# Update
```html
<button>
  increment
</button>
<p>
  1 * 2 = 2
</p>
<p>
  2 * 2 = 4
</p>
<p>
  3 * 2 = 6
</p>
<p>
  4 * 2 = 8
</p>
<p>
  5 * 2 = 10
</p>
```
## Change
```
INSERT: p:nth-of-type(1)::text@5 + ::text("2")
INSERT: p:nth-of-type(1) + p
INSERT: p:nth-of-type(2)::text("2 * ")
INSERT: p:nth-of-type(2)::text@0 + ::text("2")
INSERT: p:nth-of-type(2)::text@4 + ::text(" = ")
INSERT: p:nth-of-type(2)::text@5 + ::text("4")
INSERT: p:nth-of-type(2) + p
INSERT: p:nth-of-type(3)::text("3 * ")
INSERT: p:nth-of-type(3)::text@0 + ::text("2")
INSERT: p:nth-of-type(3)::text@4 + ::text(" = ")
INSERT: p:nth-of-type(3)::text@5 + ::text("6")
INSERT: p:nth-of-type(3) + p
INSERT: p:nth-of-type(4)::text("4 * ")
INSERT: p:nth-of-type(4)::text@0 + ::text("2")
INSERT: p:nth-of-type(4)::text@4 + ::text(" = ")
INSERT: p:nth-of-type(4)::text@5 + ::text("8")
INSERT: p:nth-of-type(4) + p
INSERT: p:nth-of-type(5)::text("5 * ")
INSERT: p:nth-of-type(5)::text@0 + ::text("2")
INSERT: p:nth-of-type(5)::text@4 + ::text(" = ")
INSERT: p:nth-of-type(5)::text@5 + ::text("10")
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  increment
</button>
<p>
  1 * 3 = 2
</p>
<p>
  2 * 3 = 4
</p>
<p>
  3 * 3 = 6
</p>
<p>
  4 * 3 = 8
</p>
<p>
  5 * 3 = 10
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@4 "2" => "3"
UPDATE: p:nth-of-type(2)::text@4 "2" => "3"
UPDATE: p:nth-of-type(3)::text@4 "2" => "3"
UPDATE: p:nth-of-type(4)::text@4 "2" => "3"
UPDATE: p:nth-of-type(5)::text@4 "2" => "3"
```

# Update
```html
<button>
  increment
</button>
<p>
  1 * 3 = 
</p>
<p>
  2 * 3 = 
</p>
<p>
  3 * 3 = 
</p>
<p>
  4 * 3 = 
</p>
<p>
  5 * 3 = 
</p>
```
## Change
```
REMOVE: p:nth-of-type(1)::text@5 + ::text("2")
REMOVE: p:nth-of-type(2)::text@5 + ::text("4")
REMOVE: p:nth-of-type(3)::text@5 + ::text("6")
REMOVE: p:nth-of-type(4)::text@5 + ::text("8")
REMOVE: p:nth-of-type(5)::text@5 + ::text("10")
```

# Update
```html
<button>
  increment
</button>
<p>
  1 * 3 = 3
</p>
<p>
  2 * 3 = 6
</p>
<p>
  3 * 3 = 9
</p>
<p>
  4 * 3 = 12
</p>
<p>
  5 * 3 = 15
</p>
```
## Change
```
INSERT: p:nth-of-type(1)::text@5 + ::text("3")
INSERT: p:nth-of-type(5)::text@5 + ::text("15")
INSERT: p:nth-of-type(4)::text@5 + ::text("12")
INSERT: p:nth-of-type(3)::text@5 + ::text("9")
INSERT: p:nth-of-type(2)::text@5 + ::text("6")
```
