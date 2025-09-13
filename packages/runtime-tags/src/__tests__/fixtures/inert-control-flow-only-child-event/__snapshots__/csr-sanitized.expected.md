# Render
```html
<select>
  <option
    selected=""
  >
    0
  </option>
  <option>
    1
  </option>
  <option>
    2
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
  <option>
    0
  </option>
  <option>
    1
  </option>
  <option
    selected=""
  >
    2
  </option>
</select>
```
