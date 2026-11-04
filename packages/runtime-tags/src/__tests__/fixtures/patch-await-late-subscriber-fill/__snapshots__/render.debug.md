# Render `{"label":"a","promise":{"value":2}}`
```html
<button>
  0
</button>
<em>
  loading
</em>
```

# Update `{"label":"b","promise":{"value":2}}`

# Update
```html
<button>
  0
</button>
<div
  id="done"
>
  b0
</div>
```
## Change
```
INSERT: #done::text("b0")
REMOVE: em
INSERT: button + #done
UPDATE: #done::text "a0" => "b0"
```
