# Render `{"show":false,"note":"a"}`

# Update `{"show":true,"note":"b"}`
```html
<textarea>
  hello
</textarea>
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
    B
  </option>
</select>
<p>
  b
</p>
```
## Change
```
INSERT: textarea
INSERT: textarea + select
INSERT: select + p
INSERT: textarea::text("hello")
UPDATE: select > option:nth-of-type(2)[selected] null => ""
```
