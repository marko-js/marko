# Render `{"tag":"div","cls":"a","wrap":true,"note":"x"}`
```html
<div
  class="a"
>
  hi
</div>
<section>
  x
</section>
```

# Update `{"tag":"div","cls":"b","wrap":true,"note":"y"}`
```html
<div
  class="b"
>
  hi
</div>
<section>
  y
</section>
```
## Change
```
UPDATE: .b[class] "a" => "b"
UPDATE: section::text "x" => "y"
```

# Update `{"tag":"section","cls":"b","wrap":false,"note":"z"}`
```html
<section
  class="b"
>
  hi
</section>
z
```
## Change
```
INSERT: .b
REMOVE: .b + .b
INSERT: .b::text("hi")
UPDATE: .b[class] null => "b"
INSERT: .b + ::text("z")
REMOVE: ::text + section
UPDATE: ::text " " => "z"
```

# Update `{"tag":"section","cls":"c","wrap":true,"note":"w"}`
```html
<section
  class="c"
>
  hi
</section>
<section>
  w
</section>
```
## Change
```
UPDATE: .c[class] "b" => "c"
INSERT: .c + section
REMOVE: section:nth-of-type(2) + ::text("z")
INSERT: section:nth-of-type(2)::text("w")
UPDATE: section:nth-of-type(2)::text " " => "w"
```
