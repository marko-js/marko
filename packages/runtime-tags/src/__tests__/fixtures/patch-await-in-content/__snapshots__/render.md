# Render `{"msg":"a","promise":{"value":2}}`
```html
<button>
  0
</button>
<section>
  <em>
    loading
  </em>
</section>
```

# Update
```html
<button>
  0
</button>
<section>
  <div
    id="done"
  >
    a done
  </div>
</section>
```
## Change
```
INSERT: #done::text("a")
INSERT: #done::text@0 + ::text(" done")
REMOVE: section > em
INSERT: section > #done
```

# Update `{"msg":"b","promise":{"value":2}}`
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
UPDATE: #done::text@0 "a" => "b"
```
