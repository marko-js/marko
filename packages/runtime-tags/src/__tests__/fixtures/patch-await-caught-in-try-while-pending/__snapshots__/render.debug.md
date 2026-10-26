# Render `{"msg":"a","promise":{"value":{}}}`
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
<section>
  <p>
    oops
  </p>
</section>
```
## Change
```
INSERT: section > p::text("oops")
REMOVE: em
INSERT: button + section
INSERT: section > p
```
