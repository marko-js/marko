# Render
```html
<button>
  increment
</button>
<p>
  1 * 2 = 
</p>
<p>
  2 * 2 = 
</p>
<p>
  3 * 2 = 
</p>
<p>
  4 * 2 = 
</p>
<p>
  5 * 2 = 
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
INSERT: p:nth-of-type(5)::text@5 + ::text("10")
INSERT: p:nth-of-type(4)::text@5 + ::text("8")
INSERT: p:nth-of-type(3)::text@5 + ::text("6")
INSERT: p:nth-of-type(2)::text@5 + ::text("4")
UPDATE: p:nth-of-type(1)::text@8 " " => "2"
UPDATE: p:nth-of-type(5)::text@8 " " => "10"
UPDATE: p:nth-of-type(4)::text@8 " " => "8"
UPDATE: p:nth-of-type(3)::text@8 " " => "6"
UPDATE: p:nth-of-type(2)::text@8 " " => "4"
```

# Update
```js
container.querySelector("button").click();
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
UPDATE: p:nth-of-type(1)::text@4 "2" => "3"
UPDATE: p:nth-of-type(2)::text@4 "2" => "3"
UPDATE: p:nth-of-type(3)::text@4 "2" => "3"
UPDATE: p:nth-of-type(4)::text@4 "2" => "3"
UPDATE: p:nth-of-type(5)::text@4 "2" => "3"
UPDATE: p:nth-of-type(1)::text@8 "2" => "3"
UPDATE: p:nth-of-type(5)::text@8 "10" => "15"
UPDATE: p:nth-of-type(4)::text@8 "8" => "12"
UPDATE: p:nth-of-type(3)::text@8 "6" => "9"
UPDATE: p:nth-of-type(2)::text@8 "4" => "6"
```
