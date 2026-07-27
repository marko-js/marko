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
<output>
  b
</output>
```

# Update
```js
const select = document.querySelector("select");
select.value = "c";
select.dispatchEvent(
  new select.ownerDocument.defaultView.Event("input", { bubbles: true }),
);
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
<output>
  c
</output>
```
## Change
```
UPDATE: output::text "b" => "c"
```
