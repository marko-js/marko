# Render `{"on":true,"rec":{"name":"SHOWN_r1","secret":"SECRET_r1"}}`
```html
<button
  class="inc"
>
  0
</button>
<section>
  <em>
    SHOWN_r1
  </em>
</section>
```

# Update `{"on":false,"rec":{"name":"SECRET_r2","secret":"SECRET_rr2"}}`
```html
<button
  class="inc"
>
  0
</button>
<section />
```
## Change
```
REMOVE: section > em
```

# Update `{"on":true,"rec":{"name":"SHOWN_r3","secret":"SECRET_r3"}}`
```html
<button
  class="inc"
>
  0
</button>
<section>
  <em>
    SHOWN_r3
  </em>
</section>
```
## Change
```
INSERT: section > em
UPDATE: section > em::text " " => "SHOWN_r3"
```
