# Render `{"show":false,"user":{"name":"SHOWN_name1","passwordHash":"SECRET_hash1"},"user2":{"name":"SHOWN_name1b","passwordHash":"SECRET_hash1b"}}`
```html
<button
  class="inc"
>
  0
</button>
<div>
  SHOWN_name1 0
</div>
```

# Update `{"show":true,"user":{"name":"SHOWN_name2","passwordHash":"SECRET_hash2"},"user2":{"name":"SHOWN_name2b","passwordHash":"SECRET_hash2b"}}`
```html
<button
  class="inc"
>
  0
</button>
<div>
  SHOWN_name2 0
</div>
<div>
  SHOWN_name2b 0
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text@0 "SHOWN_name1" => "SHOWN_name2"
INSERT: div:nth-of-type(1) + div
UPDATE: div:nth-of-type(2)::text@13 "" => "0"
```
