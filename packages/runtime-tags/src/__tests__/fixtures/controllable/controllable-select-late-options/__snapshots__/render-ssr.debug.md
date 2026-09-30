# Render
```html
<select />
```
## Console
```
ERROR "A controlled `<select>`'s `value` has no matching `<option>`:" "b"
```

# Update
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
<div>
  b:0
</div>
```
## Change
```
INSERT: select > option
INSERT: select > option:nth-of-type(1)::text("a")
INSERT: select > option:nth-of-type(1) + option
INSERT: select > option:nth-of-type(2)::text("b")
INSERT: select > option:nth-of-type(2) + option
INSERT: select > option:nth-of-type(3)::text("c")
INSERT: select + div
INSERT: div::text("b")
INSERT: div::text@0 + ::text(":")
INSERT: div::text@1 + ::text("0")
```
