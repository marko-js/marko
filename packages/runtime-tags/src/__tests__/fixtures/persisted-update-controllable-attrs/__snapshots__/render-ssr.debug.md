# Render `{"$global":{"persisted":true,"item":[2]}}`
```html
<input
  class="title"
  value="Item 2"
/>
<select
  class="category"
>
  <option
    value="odd"
  >
    odd
  </option>
  <option
    selected=""
    value="even"
  >
    even
  </option>
</select>
<form>
  <input
    class="qty"
    type="number"
    value="1"
  />
  <input
    name="itemId"
    type="hidden"
    value="2"
  />
  <button
    class="add"
  >
    add
  </button>
</form>
```

# Update
```js
document.querySelector("button.add").click();
```

# Update `{"$global":{"persisted":true,"item":[3]}}`
```html
<input
  class="title"
  value="Item 3"
/>
<select
  class="category"
>
  <option
    selected=""
    value="odd"
  >
    odd
  </option>
  <option
    value="even"
  >
    even
  </option>
</select>
<form>
  <input
    class="qty"
    default-value="1"
    type="number"
    value="2"
  />
  <input
    name="itemId"
    type="hidden"
    value="3"
  />
  <button
    class="add"
  >
    add
  </button>
</form>
```
## Change
```
UPDATE: .title[value] "Item 2" => "Item 3"
UPDATE: form > input:nth-of-type(2)[value] "2" => "3"
UPDATE: .category > option:nth-of-type(1)[selected] null => ""
UPDATE: .category > option:nth-of-type(2)[selected] "" => null
```

# Update
```js
document.querySelector("button.add").click();
```
