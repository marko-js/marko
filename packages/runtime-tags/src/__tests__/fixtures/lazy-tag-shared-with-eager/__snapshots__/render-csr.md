# Render
```html
<section>
  <button
    class="shared"
  >
    shared:0
  </button>
</section>
```

# Update `click("section .shared")`
```html
<section>
  <button
    class="shared"
  >
    shared:1
  </button>
</section>
```
## Change
```
UPDATE: .shared::text@7 "0" => "1"
```
