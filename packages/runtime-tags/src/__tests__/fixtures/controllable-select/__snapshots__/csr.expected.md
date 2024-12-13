# Render {}
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
inserted select0, span1
```


# Render 
const select = container.querySelector(`select`);
  const window = select.ownerDocument.defaultView;
  select.value = "c";
  select.dispatchEvent(new window.Event("input", {
bubbles: true
  }))

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
<span>
  c
</span>
```

# Mutations
```
span1/#text0: "b" => "c"
```