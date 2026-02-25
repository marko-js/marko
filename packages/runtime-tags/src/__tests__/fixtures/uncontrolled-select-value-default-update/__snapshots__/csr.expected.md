# Render
```html
<select>
  <option />
  <option
    selected=""
    value="a"
  />
</select>
<select>
  <option
    selected=""
  />
  <option
    value="b"
  />
</select>
<select>
  <option
    selected=""
  />
  <option
    value="b"
  />
</select>
<select>
  <option
    selected=""
  />
  <option
    value="b"
  />
</select>
<button>
  Update
</button>
```

# Mutations
```
INSERT select0, select1, select2, select3, button
UPDATE select0/option1[selected] null => ""
```

# Render
```js
container.querySelector("button").click();
```
```html
<select>
  <option />
  <option
    selected=""
    value="a"
  />
</select>
<select>
  <option
    selected=""
  />
  <option
    value="b"
  />
</select>
<select>
  <option
    selected=""
  />
  <option
    default-selected=""
    value="b"
  />
</select>
<select>
  <option
    selected=""
  />
  <option
    default-selected=""
    value="b"
  />
</select>
<button>
  Update
</button>
```

# Mutations
```
UPDATE select3/option1[selected] null => ""
UPDATE select2/option1[selected] null => ""
```