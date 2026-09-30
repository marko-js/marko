# Render `{"tag":"select"}`
```html
<select />
<output />
```

# Update
```js
const select = document.querySelector("select");
const option = document.createElement("option");
option.value = "x";
option.selected = true;
select.append(option);
```
```html
<select>
  <option
    selected=""
    value="x"
  />
</select>
<output>
  x
</output>
```
## Change
```
INSERT: select > option
UPDATE: output::text "" => "x"
```
