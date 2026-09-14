# Render `{"title":"Store","many":false,"choice":"a"}`
```html
<main>
  <h1>
    Store
  </h1>
  <select>
    <option
      selected=""
      value="a"
    >
      A
    </option>
    <option
      value="b"
    >
      B
    </option>
  </select>
</main>
```

# Update `{"title":"Store!","many":true,"choice":["a","b"]}`
```html
<main>
  <h1>
    Store!
  </h1>
  <select
    multiple=""
  >
    <option
      selected=""
      value="a"
    >
      A
    </option>
    <option
      selected=""
      value="b"
    >
      B
    </option>
  </select>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
UPDATE: main > select[multiple] null => ""
```
