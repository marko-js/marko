# Render `{"rows":[{"id":1,"card":true,"label":"a"},{"id":2,"card":false,"label":"b"},{"id":3,"card":false,"label":"c"}]}`
```html
<button
  class="toggle"
>
  toggle
</button>
<b>
  a
</b>
<div>
  <b>
    b
  </b>
</div>
<div>
  <b>
    c
  </b>
</div>
```

# Update `{"rows":[{"id":1,"card":true,"label":"d"},{"id":2,"card":false,"label":"e"},{"id":3,"card":false,"label":"f"}]}`
```html
<button
  class="toggle"
>
  toggle
</button>
<b>
  d
</b>
<div>
  <b>
    e
  </b>
</div>
<div>
  <b>
    f
  </b>
</div>
```
## Change
```
UPDATE: div:nth-of-type(1) > b::text "b" => "e"
UPDATE: div:nth-of-type(2) > b::text "c" => "f"
UPDATE: b::text "a" => "d"
```
