# Render `{"text":"a","on":true,"pick":"a","open":false}`
```html
<input
  value="a"
/>
<input
  checked=""
  type="checkbox"
/>
<textarea>
  a
</textarea>
<select>
  <option
    selected=""
    value="a"
  >
    A
  </option>
  <option
    value="b"
  >
    B
  </option>
  <option
    value="c"
  >
    C
  </option>
</select>
<details>
  <summary>
    more
  </summary>
  body
</details>
```

# Update `{"text":"b","on":false,"pick":"b","open":false}`
```html
<input
  default-value="b"
  value="a"
/>
<input
  checked=""
  type="checkbox"
/>
<textarea
  default-value="b"
>
  a
</textarea>
<select>
  <option
    selected=""
    value="a"
  >
    A
  </option>
  <option
    default-selected=""
    value="b"
  >
    B
  </option>
  <option
    value="c"
  >
    C
  </option>
</select>
<details>
  <summary>
    more
  </summary>
  body
</details>
```
## Change
```
UPDATE: input:nth-of-type(1)[value] "a" => "b"
REMOVE: textarea::text("a")
INSERT: textarea::text("b")
UPDATE: input:nth-of-type(2)[checked] "" => null
UPDATE: select > option:nth-of-type(1)[selected] "" => null
UPDATE: select > option:nth-of-type(2)[selected] null => ""
```

# Update
```js
document.querySelector("input:not([type])").value =
"typed";
  document.querySelector("[type=checkbox]").checked = false;
  document.querySelector("textarea").value = "typed";
  document.querySelector("select").value = "c";
  document.querySelector("details").open = true;
```
```html
<input
  default-value="b"
  value="typed"
/>
<input
  type="checkbox"
/>
<textarea
  default-value="b"
>
  typed
</textarea>
<select>
  <option
    value="a"
  >
    A
  </option>
  <option
    default-selected=""
    value="b"
  >
    B
  </option>
  <option
    selected=""
    value="c"
  >
    C
  </option>
</select>
<details
  open=""
>
  <summary>
    more
  </summary>
  body
</details>
```
## Change
```
UPDATE: details[open] null => ""
```

# Update `{"text":"c","on":true,"pick":"a","open":false}`
```html
<input
  default-value="c"
  value="typed"
/>
<input
  default-checked=""
  type="checkbox"
/>
<textarea
  default-value="c"
>
  typed
</textarea>
<select>
  <option
    default-selected=""
    value="a"
  >
    A
  </option>
  <option
    value="b"
  >
    B
  </option>
  <option
    selected=""
    value="c"
  >
    C
  </option>
</select>
<details
  open=""
>
  <summary>
    more
  </summary>
  body
</details>
```
## Change
```
UPDATE: input:nth-of-type(1)[value] "b" => "c"
REMOVE: textarea::text("b")
INSERT: textarea::text("c")
UPDATE: input:nth-of-type(2)[checked] null => ""
UPDATE: select > option:nth-of-type(1)[selected] null => ""
UPDATE: select > option:nth-of-type(2)[selected] "" => null
```

# Update `{"text":"a","on":false,"pick":"c","open":true}`
```html
<input
  default-value="a"
  value="typed"
/>
<input
  type="checkbox"
/>
<textarea
  default-value="a"
>
  typed
</textarea>
<select>
  <option
    value="a"
  >
    A
  </option>
  <option
    value="b"
  >
    B
  </option>
  <option
    selected=""
    value="c"
  >
    C
  </option>
</select>
<details
  open=""
>
  <summary>
    more
  </summary>
  body
</details>
```
## Change
```
UPDATE: input:nth-of-type(1)[value] "c" => "a"
REMOVE: textarea::text("c")
INSERT: textarea::text("a")
UPDATE: input:nth-of-type(2)[checked] "" => null
UPDATE: select > option:nth-of-type(1)[selected] "" => null
UPDATE: select > option:nth-of-type(3)[selected] null => ""
```
