# Render `{"items":[{"id":"a","msg":"a","promise":{"value":2}}]}`
```html
<button>
  0
</button>
<em>
  loading
</em>
```

# Update `{"items":[{"id":"a","msg":"b","promise":{"value":2}},{"id":"c","msg":"c","promise":{"value":2}}]}`

# Update
```html
<button>
  0
</button>
<section>
  <div>
    b done
  </div>
  <div>
    c done
  </div>
</section>
```
## Change
```
INSERT: section > div:nth-of-type(1)::text("b")
INSERT: section > div:nth-of-type(1)::text@0 + ::text(" done")
REMOVE: em
INSERT: button + section
UPDATE: section > div:nth-of-type(1)::text@0 "a" => "b"
```
