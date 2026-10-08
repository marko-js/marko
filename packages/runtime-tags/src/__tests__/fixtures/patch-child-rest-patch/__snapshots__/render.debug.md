# Render `{"label":"l1"}`
```html
<main>
  <em>
    l1
  </em>
</main>
```

# Update `{"label":"l2"}`
```html
<main>
  <em>
    l2
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "l1" => "l2"
```

# Update `{"label":"l3"}`
```html
<main>
  <em>
    l3
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "l2" => "l3"
```
