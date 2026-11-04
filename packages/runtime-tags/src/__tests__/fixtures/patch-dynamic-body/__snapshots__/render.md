# Render `{"mode":"a","text":"one"}`
```html
<main>
  <div
    class="a"
  >
    one
  </div>
</main>
```

# Update `{"mode":"a","text":"two"}`
```html
<main>
  <div
    class="a"
  >
    two
  </div>
</main>
```
## Change
```
UPDATE: .a::text "one" => "two"
```
