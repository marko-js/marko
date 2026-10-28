# Render `{"label":"a","show":false}`
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

# Update `{"label":"b","show":true}`
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
INSERT: button:nth-of-type(1) + em
UPDATE: em:nth-of-type(1)::text "AK" => "BK"
UPDATE: b:nth-of-type(1)::text "a" => "b"
UPDATE: b:nth-of-type(2)::text "a" => "b"
```

# Update `{"label":"c","show":true}`
```html
<em>
  CK
</em>
<b>
  c
</b>
<button
  class="toggle"
>
  toggle
</button>
<em>
  CK
</em>
<b>
  c
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
UPDATE: em:nth-of-type(2)::text "BK" => "CK"
UPDATE: em:nth-of-type(1)::text "BK" => "CK"
UPDATE: b:nth-of-type(1)::text "b" => "c"
UPDATE: b:nth-of-type(2)::text "b" => "c"
```
