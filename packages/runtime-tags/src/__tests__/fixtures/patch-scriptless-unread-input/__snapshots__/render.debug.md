# Render `{"show":false,"user":{"name":"SHOWN_name1","passwordHash":"SECRET_hash1"},"user2":{"name":"SHOWN_name1b","passwordHash":"SECRET_hash1b"},"tag":"section","cls":{"SHOWN_a1":true,"SECRET_b1":false},"user3":{"name":"SHOWN_name1c","passwordHash":"SECRET_hash1c"}}`
```html
<div>
  SHOWN_name1b
</div>
<section
  class="SHOWN_a1"
>
  SHOWN_name1c
</section>
```

# Update `{"show":true,"user":{"name":"SHOWN_name2","passwordHash":"SECRET_hash2"},"user2":{"name":"SHOWN_name2b","passwordHash":"SECRET_hash2b"},"tag":"div","cls":{"SHOWN_a2":true,"SECRET_b2":false},"user3":{"name":"SHOWN_name2c","passwordHash":"SECRET_hash2c"}}`
```html
<div>
  SHOWN_name2
</div>
<div>
  SHOWN_name2b
</div>
<div
  class="SHOWN_a2"
>
  SHOWN_name2c
</div>
```
## Change
```
INSERT: div
UPDATE: div:nth-of-type(2)::text "SHOWN_name1b" => "SHOWN_name2b"
INSERT: div:nth-of-type(2) + .SHOWN_a2
REMOVE: .SHOWN_a2 + section
UPDATE: .SHOWN_a2[class] null => "SHOWN_a2"
UPDATE: .SHOWN_a2::text " " => "SHOWN_name2c"
```
