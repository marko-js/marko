# Render
```html
<select />
<div>
  b:0
</div>
```
## Console
```
ERROR "A controlled `<select>`'s `value` has no matching `<option>`:" "b"
```

# Update
```html
<select>
  <option
    selected=""
    value="a"
  >
    a
  </option>
  <option
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
<div>
  b:0
</div>
```
## Change
```
INSERT: select > option:nth-of-type(1)
INSERT: select > option:nth-of-type(2)
INSERT: select > option:nth-of-type(3)
```

# Update
```html
<select>
  <option
    selected=""
    value="a"
  >
    a
  </option>
  <option
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
<div>
  a:1
</div>
```
## Change
```
UPDATE: div::text@0 "b" => "a"
UPDATE: div::text@2 "0" => "1"
```
