# Render `{"show":false,"user":{"value":{"name":"SHOWN_name1","passwordHash":"SECRET_hash1"}},"card":{"value":{}},"tag":"div","boxed":{"value":{"name":"SHOWN_name1b","passwordHash":"SECRET_hash1b"}}}`
```html
<button
  class="inc"
>
  0
</button>
<div
  class="box"
/>
```

# Update
```html
<button
  class="inc"
>
  0
</button>
<div
  class="box"
>
  <p>
    SHOWN_name1b
  </p>
</div>
<p>
  end
</p>
```
## Change
```
INSERT: .box > p
INSERT: .box > p::text("SHOWN_name1b")
INSERT: .box + p
INSERT: p::text("end")
```

# Update `{"show":true,"user":{"value":{"name":"SHOWN_name2","passwordHash":"SECRET_hash2"}},"card":{"value":{"name":"SHOWN_name2c","passwordHash":"SECRET_hash2c"}},"tag":"section","boxed":{"value":{"name":"SHOWN_name2b","passwordHash":"SECRET_hash2b"}}}`
```html
<button
  class="inc"
>
  0
</button>
<p>
  SHOWN_name2
</p>
<div>
  SHOWN_name2c
</div>
<section
  class="box"
>
  <p>
    SHOWN_name2b
  </p>
</section>
<p>
  end
</p>
```
## Change
```
INSERT: .inc + p
INSERT: div + .box
REMOVE: .box + .box
UPDATE: .box[class] null => "box"
INSERT: .box > p
INSERT: p:nth-of-type(1) + div
```
