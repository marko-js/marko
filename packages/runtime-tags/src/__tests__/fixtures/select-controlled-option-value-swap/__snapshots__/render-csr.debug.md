# Render `{"options":[{"id":1,"value":"a"},{"id":2,"value":"b"}]}`
```html
<select>
  <option
    value="a"
  >
    a
  </option>
  <option
    selected=""
    value="b"
  >
    b
  </option>
</select>
<select
  multiple=""
>
  <option
    value="a"
  >
    a
  </option>
  <option
    selected=""
    value="b"
  >
    b
  </option>
</select>
<span>
  0
</span>
```

# Update `{"options":[{"id":1,"value":"b"},{"id":2,"value":"a"}]}`
```html
<select>
  <option
    value="b"
  >
    b
  </option>
  <option
    selected=""
    value="a"
  >
    a
  </option>
</select>
<select
  multiple=""
>
  <option
    value="b"
  >
    b
  </option>
  <option
    selected=""
    value="a"
  >
    a
  </option>
</select>
<span>
  0
</span>
```
## Change
```
UPDATE: select:nth-of-type(1) > option:nth-of-type(1)[value] "a" => "b"
UPDATE: select:nth-of-type(1) > option:nth-of-type(1)::text "a" => "b"
UPDATE: select:nth-of-type(1) > option:nth-of-type(2)[value] "b" => "a"
UPDATE: select:nth-of-type(1) > option:nth-of-type(2)::text "b" => "a"
UPDATE: select:nth-of-type(2) > option:nth-of-type(1)[value] "a" => "b"
UPDATE: select:nth-of-type(2) > option:nth-of-type(1)::text "a" => "b"
UPDATE: select:nth-of-type(2) > option:nth-of-type(2)[value] "b" => "a"
UPDATE: select:nth-of-type(2) > option:nth-of-type(2)::text "b" => "a"
```

# Update
```js
const [single, multiple] = document.querySelectorAll("select");
const span = document.querySelector("span");
assert.ok(
  single.value === "b",
  `select showed ${JSON.stringify(single.value)} after its options swapped values, expected "b"`,
);
assert.ok(
  selectedValues(multiple) === "b",
  `multiple select showed ${JSON.stringify(selectedValues(multiple))} after its options swapped values, expected "b"`,
);
assert.ok(
  span.textContent === "0",
  `valueChange ran ${span.textContent} times for a swap the user never made, expected 0`,
);
```
