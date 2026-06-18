# Render
```html
<select>
  <option
    selected=""
    value=""
  >
    -- choose --
  </option>
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
</select>
<output>
  value=
</output>
```

# Update
```js
select(container, "a");
```
```html
<select>
  <option
    default-selected=""
    value=""
  >
    -- choose --
  </option>
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
</select>
<output>
  value=a
</output>
```
## Change
```
UPDATE: output::text "value=" => "value=a"
```

# Update
```js
select(container, "");
```
```html
<select>
  <option
    selected=""
    value=""
  >
    -- choose --
  </option>
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
</select>
<output>
  value=
</output>
```
## Change
```
UPDATE: output::text "value=a" => "value="
```
