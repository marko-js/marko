# Render `{"wrap":false,"rows":[{"id":1,"label":"a"},{"id":2,"label":"b"}]}`
```html
<div>
  <b>
    a
  </b>
</div>
<div>
  <b>
    b
  </b>
</div>
```

# Update `{"wrap":false,"rows":[{"id":1,"label":"c"},{"id":2,"label":"d"}]}`
```html
<div>
  <b>
    c
  </b>
</div>
<div>
  <b>
    d
  </b>
</div>
```
## Change
```
UPDATE: div:nth-of-type(1) > b::text "a" => "c"
UPDATE: div:nth-of-type(2) > b::text "b" => "d"
```
