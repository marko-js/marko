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
    placeholder b
  </option>
</select>
```

# Update
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
    async b
  </option>
</select>
```
## Change
```
INSERT: select > option:nth-of-type(2)::text("async b")
REMOVE: select > option
INSERT: select > option:nth-of-type(1) + option
```
