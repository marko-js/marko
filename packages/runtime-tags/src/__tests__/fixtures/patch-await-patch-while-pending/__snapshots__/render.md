# Render `{"msg":"a","promise":{"value":2}}`
```html
<button>
  0
</button>
<em>
  loading
</em>
```

# Update `{"msg":"b","promise":{"value":2}}`

# Update
```html
<button>
  0
</button>
<div
  id="done"
>
  b done
</div>
```
## Change
```
INSERT: #done::text("b")
INSERT: #done::text@0 + ::text(" done")
REMOVE: em
INSERT: button + #done
UPDATE: #done::text@0 "a" => "b"
```
