# Render `{"title":"a","n":1,"cls":"c1","on":true,"color":"red"}`
```html
<em>
  1 a
</em>
<div
  class="c1 on"
  style="color:red"
>
  x
</div>
```

# Update `{"title":"b","n":2,"cls":"c2","on":false,"color":"blue"}`
```html
<em>
  2 b
</em>
<div
  class="c2"
  style="color:blue"
>
  x
</div>
```
## Change
```
UPDATE: em::text@0 "1" => "2"
UPDATE: em::text@2 "a" => "b"
UPDATE: .c2[class] "c1 on" => "c2"
UPDATE: .c2[style] "color:red" => "color:blue"
```
