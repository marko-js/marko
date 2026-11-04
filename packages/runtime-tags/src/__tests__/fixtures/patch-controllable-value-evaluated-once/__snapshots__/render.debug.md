# Render `{"value":"first"}`
```html
<main>
  <input
    value="first"
  />
  <p>
    1
  </p>
</main>
```

# Update `{"value":"second"}`
```html
<main>
  <input
    default-value="second"
    value="first"
  />
  <p>
    1
  </p>
</main>
```
## Change
```
UPDATE: main > input[value] "first" => "second"
```
