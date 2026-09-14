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

## Patch rejected (navigate)

# Update
```html
<button>
  0
</button>
<em>
  loading
</em>
```
## Change
```
INSERT: #done::text("a")
INSERT: #done::text@0 + ::text(" done")
```
