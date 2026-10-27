# Render `{"b":"b1"}`
```html
<section>
  <em>
    x b1
  </em>
</section>
```

# Update `{"b":"b2"}`
```html
<section>
  <em>
    x b2
  </em>
</section>
```
## Change
```
UPDATE: section > em::text@2 "b1" => "b2"
```
