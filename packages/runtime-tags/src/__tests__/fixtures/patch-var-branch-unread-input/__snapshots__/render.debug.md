# Render `{"show":true,"user":{"name":"SHOWN_name1","passwordHash":"SECRET_hash1"},"user2":{"name":"SHOWN_name1b","passwordHash":"SECRET_hash1b"}}`
```html
<button
  class="inc"
>
  0
</button>
<p>
  SHOWN_name1
</p>
<p>
  SHOWN_name1b
</p>
```

# Update `{"show":false,"user":{"name":"SHOWN_name2","passwordHash":"SECRET_hash2"},"user2":{"name":"SHOWN_name2b","passwordHash":"SECRET_hash2b"}}`
```html
<button
  class="inc"
>
  0
</button>
<p>
  SHOWN_name2
</p>
```
## Change
```
UPDATE: p::text "SHOWN_name1" => "SHOWN_name2"
REMOVE: p + p
```

# Update `{"show":true,"user":{"name":"SHOWN_name3","passwordHash":"SECRET_hash3"},"user2":{"name":"SHOWN_name3b","passwordHash":"SECRET_hash3b"}}`
```html
<button
  class="inc"
>
  0
</button>
<p>
  SHOWN_name3
</p>
<p>
  SHOWN_name3b
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "SHOWN_name2" => "SHOWN_name3"
INSERT: p:nth-of-type(1) + p
```
