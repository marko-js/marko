# Render `{"which":true,"user":{"name":"SHOWN_name1","passwordHash":"SECRET_hash1"},"alt":false,"user2":{"name":"SHOWN_name1b","passwordHash":"SECRET_hash1b"},"tag":"section","cls":{"SHOWN_on1":true,"SECRET_off1":false},"title":"SHOWN_t1","none":false,"hidden":{"secret":"SECRET_hidden1"}}`
```html
<button
  class="inc"
>
  0
</button>
<div
  class="a"
>
  SHOWN_name1
</div>
<p>
  SHOWN_name1b
</p>
<section
  class="SHOWN_on1"
  title="SHOWN_t1"
/>
```

# Update `{"which":false,"user":{"name":"SHOWN_name2","passwordHash":"SECRET_hash2"},"alt":true,"user2":{"name":"SHOWN_name2b","passwordHash":"SECRET_hash2b"},"tag":"article","cls":{"SHOWN_on2":true,"SECRET_off2":false},"title":"SHOWN_t2","none":false,"hidden":{"secret":"SECRET_hidden2"}}`
```html
<button
  class="inc"
>
  0
</button>
<div
  class="b"
>
  SHOWN_name2
</div>
<i>
  SHOWN_name2b
</i>
<article
  class="SHOWN_on2"
  title="SHOWN_t2"
/>
```
## Change
```
INSERT: .inc + .b
REMOVE: .b + div
INSERT: .b + i
REMOVE: i + p
INSERT: i + .SHOWN_on2
REMOVE: .SHOWN_on2 + section
UPDATE: .SHOWN_on2[class] null => "SHOWN_on2"
UPDATE: .SHOWN_on2[title] null => "SHOWN_t2"
UPDATE: .b::text " " => "SHOWN_name2"
UPDATE: i::text " " => "SHOWN_name2b"
```
