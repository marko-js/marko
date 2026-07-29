# Render `{"sku":"AB-100","ship":"air","eta":"3 days","tick":1,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<input
  class="sku"
  value="AB-100"
/>
<select
  class="ship"
>
  <option
    value="ground"
  >
    ground
  </option>
  <option
    selected=""
    value="air"
  >
    air
  </option>
  <option
    value="sea"
  >
    sea
  </option>
</select>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<input
  class="sku"
  value="AB-100"
/>
<select
  class="ship"
>
  <option
    value="ground"
  >
    ground
  </option>
  <option
    selected=""
    value="air"
  >
    air
  </option>
  <option
    value="sea"
  >
    sea
  </option>
</select>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update
```js
const input = document.querySelector("input.sku");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```

# Update
```js
const select = document.querySelector("select.ship");
const window = select.ownerDocument.defaultView;
select.value = value;
select.dispatchEvent(new window.Event("input", { bubbles: true }));
```

# Update `{"sku":"AB-100","ship":"air","eta":"1 week","tick":4,"$global":{"persisted":true}}`

# Update `{"sku":"AB-100","ship":"air","eta":"1 week","tick":4,"$global":{"persisted":true}}`

# Update `{"sku":"CD-200","ship":"ground","eta":"2 days","tick":8,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<input
  class="sku"
  default-value="CD-200"
  value="AB-100-custom"
/>
<select
  class="ship"
>
  <option
    default-selected=""
    value="ground"
  >
    ground
  </option>
  <option
    value="air"
  >
    air
  </option>
  <option
    selected=""
    value="sea"
  >
    sea
  </option>
</select>
```
## Change
```
UPDATE: .sku[value] "AB-100" => "CD-200"
UPDATE: .ship > option:nth-of-type(1)[selected] null => ""
UPDATE: .ship > option:nth-of-type(2)[selected] "" => null
```

# Update `{"sku":"CD-200","ship":"ground","eta":"2 days","tick":8,"$global":{"persisted":true}}`

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<input
  class="sku"
  default-value="CD-200"
  value="AB-100-custom"
/>
<select
  class="ship"
>
  <option
    default-selected=""
    value="ground"
  >
    ground
  </option>
  <option
    value="air"
  >
    air
  </option>
  <option
    selected=""
    value="sea"
  >
    sea
  </option>
</select>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
