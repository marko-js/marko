# Render `{"value":1}`

# Update
```html
<section>
  <div>
    1
  </div>
</section>
```
## Change
```
INSERT: section
UPDATE: section > div::text " " => "1"
```

# Update `{"value":2}`
```html
<section>
  <div>
    2
  </div>
</section>
```
## Change
```
UPDATE: section > div::text "1" => "2"
```
