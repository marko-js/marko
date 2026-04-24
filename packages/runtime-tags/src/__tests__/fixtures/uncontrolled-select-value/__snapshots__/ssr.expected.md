# Write
```html
  <select><option value=a>A</option><option value=b selected>B</option><option value=c>C</option></select>
```

# Render End
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
    B
  </option>
  <option
    value="c"
  >
    C
  </option>
</select>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT select
INSERT select/option0
INSERT select/option0/#text
INSERT select/option1
INSERT select/option1/#text
INSERT select/option2
INSERT select/option2/#text
```