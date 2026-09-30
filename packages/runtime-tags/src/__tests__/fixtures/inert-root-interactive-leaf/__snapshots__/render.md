# Render
```html
<main>
  <h1>
    static heading
  </h1>
  <button
    class="counter"
  >
    count:0
  </button>
</main>
```

# Update `click(".counter")`
```html
<main>
  <h1>
    static heading
  </h1>
  <button
    class="counter"
  >
    count:1
  </button>
</main>
```
## Change
```
UPDATE: .counter::text@6 "0" => "1"
```
