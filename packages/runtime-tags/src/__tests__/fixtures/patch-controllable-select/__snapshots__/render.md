# Render `{"title":"Store","choice":"a"}`
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

# Update `{"title":"Store!","choice":"b"}`
```html
<main>
  <h1>
    Store!
  </h1>
  <select>
    <option
      default-selected=""
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
```
