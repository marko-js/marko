# Render `{"show":true,"note":"a"}`
```html
<button>
  0
</button>
<section>
  <em>
    a
  </em>
</section>
```

# Update `{"show":false,"note":"b"}`
## Change
```
REMOVE: button
REMOVE: section
```

# Update `{"show":true,"note":"c"}`
```html
<button>
  0
</button>
<section>
  <em>
    c
  </em>
</section>
```
## Change
```
INSERT: button, section
UPDATE: button::text " " => "0"
```
