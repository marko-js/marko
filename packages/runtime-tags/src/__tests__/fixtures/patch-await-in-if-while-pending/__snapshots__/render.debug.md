# Render `{"show":true,"msg":"a","promise":{"value":2}}`
```html
<button>
  0
</button>
<em>
  loading
</em>
```

# Update `{"show":true,"msg":"b","promise":{"value":2}}`

# Update
```html
<button>
  0
</button>
<section>
  <div
    id="done"
  >
    b done
  </div>
</section>
```
## Change
```
INSERT: #done::text("b")
INSERT: #done::text@0 + ::text(" done")
REMOVE: em
INSERT: button + section
UPDATE: #done::text@0 "a" => "b"
```
