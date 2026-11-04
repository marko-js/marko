# Render `{"x":1,"y":"a"}`
```html
<p>
  0
</p>
<em>
  a0
</em>
<p>
  1
</p>
<em>
  a1
</em>
<p>
  1
</p>
<em>
  1
</em>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  2
</p>
<em>
  a1
</em>
<p>
  2
</p>
<em>
  a1
</em>
<p>
  2
</p>
<em>
  2
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "0" => "2"
UPDATE: em:nth-of-type(1)::text "a0" => "a1"
UPDATE: p:nth-of-type(2)::text "1" => "2"
UPDATE: p:nth-of-type(3)::text "1" => "2"
UPDATE: em:nth-of-type(3)::text "1" => "2"
```

# Update `{"x":0,"y":"b"}`
```html
<p>
  2
</p>
<em>
  b1
</em>
<p>
  1
</p>
<em>
  b0
</em>
<p>
  1
</p>
<em>
  1
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text "a1" => "b0"
UPDATE: em:nth-of-type(1)::text "a1" => "b1"
UPDATE: p:nth-of-type(2)::text "2" => "1"
UPDATE: p:nth-of-type(3)::text "2" => "1"
UPDATE: em:nth-of-type(3)::text "2" => "1"
```

# Update `{"x":2,"y":"c"}`
```html
<p>
  2
</p>
<em>
  c1
</em>
<p>
  3
</p>
<em>
  c2
</em>
<p>
  3
</p>
<em>
  3
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text "b0" => "c2"
UPDATE: em:nth-of-type(1)::text "b1" => "c1"
UPDATE: p:nth-of-type(2)::text "1" => "3"
UPDATE: p:nth-of-type(3)::text "1" => "3"
UPDATE: em:nth-of-type(3)::text "1" => "3"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  4
</p>
<em>
  c2
</em>
<p>
  4
</p>
<em>
  c2
</em>
<p>
  4
</p>
<em>
  4
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "2" => "4"
UPDATE: em:nth-of-type(1)::text "c1" => "c2"
UPDATE: p:nth-of-type(2)::text "3" => "4"
UPDATE: p:nth-of-type(3)::text "3" => "4"
UPDATE: em:nth-of-type(3)::text "3" => "4"
```

# Update `{"x":3,"y":"d"}`
```html
<p>
  4
</p>
<em>
  d2
</em>
<p>
  5
</p>
<em>
  d3
</em>
<p>
  5
</p>
<em>
  5
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text "c2" => "d3"
UPDATE: em:nth-of-type(1)::text "c2" => "d2"
UPDATE: p:nth-of-type(2)::text "4" => "5"
UPDATE: p:nth-of-type(3)::text "4" => "5"
UPDATE: em:nth-of-type(3)::text "4" => "5"
```
