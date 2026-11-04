# Render `{"useA":true,"record":{"name":"SHOWN_name1","passwordHash":"SECRET_hash1"}}`
```html
<section>
  <h4>
    SHOWN_name1
  </h4>
</section>
```

# Update `{"useA":false,"record":{"name":"SHOWN_name2","passwordHash":"SECRET_hash2"}}`
```html
<section>
  <h5>
    SHOWN_name2
  </h5>
</section>
```
## Change
```
INSERT: section > h5
REMOVE: section > h5 + h4
UPDATE: section > h5::text " " => "SHOWN_name2"
```
