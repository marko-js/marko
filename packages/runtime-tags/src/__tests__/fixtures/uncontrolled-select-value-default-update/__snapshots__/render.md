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

# Update
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
## Change
```
UPDATE: select:nth-of-type(4) > option:nth-of-type(2)[selected] null => ""
UPDATE: select:nth-of-type(3) > option:nth-of-type(2)[selected] null => ""
```
