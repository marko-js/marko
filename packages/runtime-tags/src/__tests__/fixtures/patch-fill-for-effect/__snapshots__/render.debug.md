# Render `{"items":["one","two"],"label":"a"}`
```html
<p>
  a one: 0
</p>
<p>
  a two: 0
</p>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  a one: 1
</p>
<p>
  a two: 1
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: p:nth-of-type(1)::text "a one: 0" => "a one: 1"
UPDATE: p:nth-of-type(2)::text "a two: 0" => "a two: 1"
```

# Update `{"items":["one","two"],"label":"b"}`
```html
<p>
  b one: 1
</p>
<p>
  b two: 1
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "a one: 1" => "b one: 1"
UPDATE: p:nth-of-type(2)::text "a two: 1" => "b two: 1"
UPDATE: body[data-one] "a" => "b"
UPDATE: body[data-two] "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  b one: 2
</p>
<p>
  b two: 2
</p>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: p:nth-of-type(1)::text "b one: 1" => "b one: 2"
UPDATE: p:nth-of-type(2)::text "b two: 1" => "b two: 2"
```

# Update `{"items":["one","two"],"label":"c"}`
```html
<p>
  c one: 2
</p>
<p>
  c two: 2
</p>
<button>
  2
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "b one: 2" => "c one: 2"
UPDATE: p:nth-of-type(2)::text "b two: 2" => "c two: 2"
UPDATE: body[data-one] "b" => "c"
UPDATE: body[data-two] "b" => "c"
```
