# Render `{"which":true,"id":"a"}`
```html
<div
  class="one"
  title="a"
>
  x
</div>
<p>
  a
</p>
```

# Update `{"which":true,"id":"b"}`
```html
<div
  class="one"
  title="b"
>
  x
</div>
<p>
  b
</p>
```
## Change
```
UPDATE: .one[title] "a" => "b"
UPDATE: p::text "a" => "b"
```

# Update `{"which":false,"id":"c"}`
```html
<div
  class="two"
>
  x
</div>
<p>
  c
</p>
```
## Change
```
UPDATE: .two[title] "b" => null
UPDATE: .two[class] "one" => "two"
UPDATE: p::text "b" => "c"
```

# Update `{"which":true,"id":"d"}`
```html
<div
  class="one"
  title="d"
>
  x
</div>
<p>
  d
</p>
```
## Change
```
UPDATE: .one[class] "two" => "one"
UPDATE: .one[title] null => "d"
UPDATE: p::text "c" => "d"
```
