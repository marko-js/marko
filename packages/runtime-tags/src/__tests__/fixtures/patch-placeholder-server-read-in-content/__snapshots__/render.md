# Render `{"msg":"a","promise":{"value":2}}`
```html
<button>
  0
</button>
<section>
  <em>
    loading a
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
    done
  </div>
</section>
```
## Change
```
INSERT: #done::text("done")
REMOVE: section > em
INSERT: section > #done
```

# Update `{"msg":"b","promise":{"value":2}}`
