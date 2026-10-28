# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<em>
  a
</em>
<em>
  a
</em>
```

# Update `{"label":"a","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<em>
  a
</em>
<em>
  a
</em>
<button>
  clear
</button>
<em>
  a
</em>
<em>
  a
</em>
```
## Change
```
INSERT: em:nth-of-type(2) + :is(button, em, em)
UPDATE: em:nth-of-type(3)::text " " => "a"
UPDATE: em:nth-of-type(4)::text " " => "a"
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<em>
  b
</em>
<em>
  b
</em>
<button>
  clear
</button>
<em>
  b
</em>
<em>
  b
</em>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "a" => "b"
UPDATE: em:nth-of-type(2)::text "a" => "b"
UPDATE: em:nth-of-type(3)::text "a" => "b"
UPDATE: em:nth-of-type(4)::text "a" => "b"
```

# Update `{"label":"c","rows":[{"id":1},{"id":2},{"id":3}]}`
```html
<button>
  clear
</button>
<em>
  c
</em>
<em>
  c
</em>
<button>
  clear
</button>
<em>
  c
</em>
<em>
  c
</em>
<button>
  clear
</button>
<em>
  c
</em>
<em>
  c
</em>
```
## Change
```
INSERT: em:nth-of-type(4) + :is(button, em, em)
UPDATE: em:nth-of-type(1)::text "b" => "c"
UPDATE: em:nth-of-type(2)::text "b" => "c"
UPDATE: em:nth-of-type(3)::text "b" => "c"
UPDATE: em:nth-of-type(4)::text "b" => "c"
UPDATE: em:nth-of-type(5)::text " " => "c"
UPDATE: em:nth-of-type(6)::text " " => "c"
```
