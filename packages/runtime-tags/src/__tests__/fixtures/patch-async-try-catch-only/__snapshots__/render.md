# Render `{"message":"ok"}`
```html
<main>
  <em>
    ok
  </em>
</main>
```

# Update `{"message":"still ok"}`
```html
<main>
  <em>
    still ok
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "ok" => "still ok"
```
