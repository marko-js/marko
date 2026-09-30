# Render
```html
<select>
  <option
    selected=""
    value="a"
  >
    A
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
    catch b
  </option>
</select>
```
## Change
```
INSERT: select > option:nth-of-type(2)::text("catch b")
INSERT: select > option:nth-of-type(1) + option
```
