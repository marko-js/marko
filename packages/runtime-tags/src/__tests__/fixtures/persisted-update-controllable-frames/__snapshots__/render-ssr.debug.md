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
loading…
```

# Update
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
<p
  class="eta"
>
  3 days
</p>
```
## Change
```
INSERT: .eta::text("3 days")
REMOVE: ::text("loading…")
INSERT: .ship + .eta
```

# Update
```js
container.querySelector("button.count").click();
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
<p
  class="eta"
>
  3 days
</p>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update
```js
const input = container.querySelector("input.sku");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```

# Update
```js
const select = container.querySelector("select.ship");
const window = select.ownerDocument.defaultView;
select.value = value;
select.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```

# Update update frame 1 of 2

# Update between frame 1 and 2

# Update `{"sku":"AB-100","ship":"air","eta":"1 week","tick":4,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<input
  class="sku"
  default-value="AB-100"
  value="AB-edited-mid-stream"
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
    default-selected=""
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
<p
  class="eta"
>
  1 week
</p>
```
## Change
```
UPDATE: .eta::text "3 days" => "1 week"
```

# Update update frame 1 of 2
```html
<button
  class="count"
>
  clicked 1
</button>
<input
  class="sku"
  value="CD-200"
/>
<select
  class="ship"
>
  <option
    selected=""
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
    value="sea"
  >
    sea
  </option>
</select>
<p
  class="eta"
>
  1 week
</p>
```
## Change
```
UPDATE: .sku[value] "AB-100" => "CD-200"
UPDATE: .ship > option:nth-of-type(1)[selected] null => ""
UPDATE: .ship > option:nth-of-type(2)[selected] "" => null
```

# Update between frame 1 and 2

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
  value="CD-edited-mid-stream"
/>
<select
  class="ship"
>
  <option
    selected=""
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
    value="sea"
  >
    sea
  </option>
</select>
<p
  class="eta"
>
  2 days
</p>
```
## Change
```
UPDATE: .eta::text "1 week" => "2 days"
```

# Update
```js
container.querySelector("button.count").click();
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
  value="CD-edited-mid-stream"
/>
<select
  class="ship"
>
  <option
    selected=""
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
    value="sea"
  >
    sea
  </option>
</select>
<p
  class="eta"
>
  2 days
</p>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
