# Render
```html
<select>
  <option
    value="x"
  >
    x
  </option>
  <option
    selected=""
    value="b"
  >
    b
  </option>
</select>
<div
  id="result"
>
  b
</div>
<button
  class="reload"
>
  reload
</button>
```

# Update
```js
document.querySelector(".reload").click();
```
```html
<select>
  <option
    value="a"
  >
    a
  </option>
  <option
    selected=""
    value="b"
  >
    b
  </option>
  <option
    value="c"
  >
    c
  </option>
</select>
<div
  id="result"
>
  b
</div>
<button
  class="reload"
>
  reload
</button>
```
## Change
```
REMOVE: select > option
INSERT: select > option:nth-of-type(2) + option
INSERT: select > option
```
