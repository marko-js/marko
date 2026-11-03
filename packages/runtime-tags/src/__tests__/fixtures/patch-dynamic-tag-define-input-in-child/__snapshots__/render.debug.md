# Render `{"useA":true,"record":{"name":"SHOWN_name1","passwordHash":"SECRET_hash1"}}`
```html
<main>
  <h4>
    SHOWN_name1
  </h4>
</main>
```

# Update `{"useA":false,"record":{"name":"SHOWN_name2","passwordHash":"SECRET_hash2"}}`
```html
<main>
  <h5>
    SHOWN_name2
  </h5>
</main>
```
## Change
```
INSERT: main > h5
REMOVE: main > h5 + h4
UPDATE: main > h5::text " " => "SHOWN_name2"
```
