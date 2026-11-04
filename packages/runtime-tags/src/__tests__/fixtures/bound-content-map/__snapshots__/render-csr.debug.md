# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  copy
</button>
<section>
  <em>
    b
  </em>
</section>
<small>
  true
</small>
```
## Change
```
INSERT: button, section, small
INSERT: section > em
UPDATE: small::text " " => "true"
UPDATE: section > em::text " " => "b"
```

# Update
```js
d.querySelector("button").click();
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  copy
</button>
<section>
  <em>
    c
  </em>
</section>
<small>
  true
</small>
```
## Change
```
UPDATE: section > em::text "b" => "c"
```
