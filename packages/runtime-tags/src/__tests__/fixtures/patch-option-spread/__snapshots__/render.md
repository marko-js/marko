# Render `{"a":{"value":"a"},"c":{"disabled":false},"label":"A","pick":"a"}`
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
    b
  </option>
  <option
    value="c"
  >
    c
  </option>
</select>
<span>
  b
</span>
<button>
  t
</button>
```

# Update `{"a":{"value":"a","data-x":1},"c":{"disabled":true},"label":"A1","pick":"b"}`
```html
<select>
  <option
    data-x="1"
    value="a"
  >
    A1
  </option>
  <option
    selected=""
    value="b"
  >
    b
  </option>
  <option
    disabled=""
    value="c"
  >
    c
  </option>
</select>
<span>
  b
</span>
<button>
  t
</button>
```
## Change
```
UPDATE: select > option:nth-of-type(1)[data-x] null => "1"
UPDATE: select > option:nth-of-type(1)::text "A" => "A1"
UPDATE: select > option:nth-of-type(3)[disabled] null => ""
```

# Update
```js
document.querySelector("button").click();
```
```html
<select>
  <option
    data-x="1"
    value="a"
  >
    A1
  </option>
  <option
    default-selected=""
    value="b"
  >
    b
  </option>
  <option
    disabled=""
    selected=""
    value="c"
  >
    c
  </option>
</select>
<span>
  c
</span>
<button>
  t
</button>
```
## Change
```
UPDATE: span::text "b" => "c"
```

# Update `{"a":{"value":"c2"},"c":{"data-y":2},"label":"A2","pick":"c2"}`
```html
<select>
  <option
    value="c2"
  >
    A2
  </option>
  <option
    default-selected=""
    value="b"
  >
    b
  </option>
  <option
    data-y="2"
    selected=""
    value="c"
  >
    c
  </option>
</select>
<span>
  c
</span>
<button>
  t
</button>
```
## Change
```
UPDATE: select > option:nth-of-type(1)[data-x] "1" => null
UPDATE: select > option:nth-of-type(1)[value] "a" => "c2"
UPDATE: select > option:nth-of-type(1)::text "A1" => "A2"
UPDATE: select > option:nth-of-type(3)[disabled] "" => null
UPDATE: select > option:nth-of-type(3)[data-y] null => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<select>
  <option
    value="c2"
  >
    A2
  </option>
  <option
    selected=""
    value="b"
  >
    b
  </option>
  <option
    data-y="2"
    value="c"
  >
    c
  </option>
</select>
<span>
  b
</span>
<button>
  t
</button>
```
## Change
```
UPDATE: span::text "c" => "b"
```
