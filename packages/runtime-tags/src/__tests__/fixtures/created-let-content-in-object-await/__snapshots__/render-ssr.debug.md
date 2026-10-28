# Render `{"show":true,"label":"b"}`
```html
<button>
  x
</button>
<section>
  <em>
    static b
  </em>
</section>
```

# Update
```html
<button>
  x
</button>
<section>
  <em>
    static b
  </em>
</section>
<div>
  b
</div>
```
## Change
```
INSERT: section + div
INSERT: div::text("b")
```
