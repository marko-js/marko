# Render `{"label":"a"}`
```html
<em>
  a!
</em>
<b>
  a
</b>
<button
  class="toggle"
>
  toggle
</button>
<em>
  AK
</em>
<b>
  a
</b>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="hide"
>
  hide
</button>
```
## Console
```
LOG "label" "a"
LOG "label" "a"
```

# Update `{"label":"b"}`
```html
<em>
  b!
</em>
<b>
  b
</b>
<button
  class="toggle"
>
  toggle
</button>
<em>
  BK
</em>
<b>
  b
</b>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="hide"
>
  hide
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text "AK" => "BK"
UPDATE: em:nth-of-type(1)::text "a!" => "b!"
UPDATE: b:nth-of-type(1)::text "a" => "b"
UPDATE: b:nth-of-type(2)::text "a" => "b"
```
## Console
```
LOG "label" "b"
LOG "label" "b"
```
