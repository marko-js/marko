# Render `{"label":"a"}`
```html
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

# Update `{"label":"b"}`
```html
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
UPDATE: em:nth-of-type(1)::text "AK" => "BK"
UPDATE: b:nth-of-type(1)::text "a" => "b"
UPDATE: b:nth-of-type(2)::text "a" => "b"
```
