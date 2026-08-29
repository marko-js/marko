# Render `{"msg":"a","promise":{"value":2}}`
```html
<button>
  0
</button>
<em>
  loading a
</em>
```

# Update
```html
<button>
  0
</button>
<div
  id="done"
>
  done
</div>
```
## Change
```
INSERT: #done::text("done")
REMOVE: em
INSERT: button + #done
```

# Update `{"msg":"b","promise":{"value":2}}`
