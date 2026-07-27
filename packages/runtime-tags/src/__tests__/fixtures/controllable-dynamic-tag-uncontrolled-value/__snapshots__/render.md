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
<button>
  pick c
</button>
```

# Update
```js
document.querySelector("button").click();
```
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
    default-selected=""
    value="c"
  >
    C
  </option>
</select>
<button>
  pick c
</button>
```
## Change
```
UPDATE: select > option:nth-of-type(2)[selected] "" => null
UPDATE: select > option:nth-of-type(3)[selected] null => ""
```
