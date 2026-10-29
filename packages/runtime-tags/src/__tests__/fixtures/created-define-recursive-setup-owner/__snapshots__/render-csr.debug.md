# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  0
</button>
<strong>
  b
</strong>
<button>
  0
</button>
<em>
  b
</em>
<button>
  0
</button>
<em>
  b
</em>
```
## Change
```
INSERT: button, strong, button, em
UPDATE: strong::text " " => "b"
INSERT: em:nth-of-type(1) + :is(button, em)
UPDATE: em:nth-of-type(1)::text " " => "b"
UPDATE: em:nth-of-type(2)::text " " => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  0
</button>
<strong>
  c
</strong>
<button>
  0
</button>
<em>
  c
</em>
<button>
  0
</button>
<em>
  c
</em>
```
## Change
```
UPDATE: strong::text "b" => "c"
UPDATE: em:nth-of-type(1)::text "b" => "c"
UPDATE: em:nth-of-type(2)::text "b" => "c"
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  0
</button>
<strong>
  d
</strong>
<button>
  0
</button>
<em>
  d
</em>
<button>
  0
</button>
<em>
  d
</em>
```
## Change
```
UPDATE: strong::text "c" => "d"
UPDATE: em:nth-of-type(1)::text "c" => "d"
UPDATE: em:nth-of-type(2)::text "c" => "d"
```
