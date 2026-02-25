# Render
```html
<select>
  <option
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
  <option
    value="c"
  >
    C
  </option>
</select>
<span>
  b
</span>
```

# Mutations
```
INSERT select, span
UPDATE select/option1[selected] null => ""
```

# Render
```js
const select = container.querySelector(`select`);
const window = select.ownerDocument.defaultView;
select.value = "c";
select.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<select>
  <option
    value="a"
  >
    A
  </option>
  <option
    default-selected=""
    value="b"
  >
    B
  </option>
  <option
    selected=""
    value="c"
  >
    C
  </option>
</select>
<span>
  c
</span>
```

# Mutations
```
UPDATE span/#text "b" => "c"
```