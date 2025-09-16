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
```


# Render
```js
const select = container.querySelector("select");
select.value = select.options[2].value;
select.dispatchEvent(new select.ownerDocument.defaultView.Event("change", {
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
```
