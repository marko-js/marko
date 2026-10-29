# Render `{"label":"a","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<em>
  a
</em>
<button>
  clear
</button>
<em>
  a
</em>
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<em>
  b
</em>
<button>
  clear
</button>
<em>
  b
</em>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "a" => "b"
UPDATE: em:nth-of-type(2)::text "a" => "b"
```

# Update `{"label":"c","rows":[{"id":1},{"id":2},{"id":3}]}`
```html
<button>
  clear
</button>
<em>
  c
</em>
<button>
  clear
</button>
<em>
  c
</em>
<button>
  clear
</button>
<em>
  c
</em>
```
## Change
```
INSERT: em:nth-of-type(2) + :is(button, em)
UPDATE: em:nth-of-type(1)::text "b" => "c"
UPDATE: em:nth-of-type(2)::text "b" => "c"
```
