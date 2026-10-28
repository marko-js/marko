# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<span>
  a
</span>
<button>
  clear
</button>
<span>
  a
</span>
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<span>
  b
</span>
<button>
  clear
</button>
<span>
  b
</span>
<button>
  clear
</button>
<span>
  b
</span>
<button>
  clear
</button>
<span>
  b
</span>
```
## Change
```
INSERT: span:nth-of-type(2) + :is(button, span, button, span)
UPDATE: span:nth-of-type(1)::text "a" => "b"
UPDATE: span:nth-of-type(2)::text "a" => "b"
UPDATE: span:nth-of-type(3)::text " " => "b"
UPDATE: span:nth-of-type(4)::text " " => "b"
```
