# Write
```html
  <select><option value=a>A</option><option value=b selected>B</option><option value=c>C</option></select>
```

# Render End
```html
<html>
  <head />
  <body>
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
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/select
INSERT html/body/select/option0
INSERT html/body/select/option0/#text
INSERT html/body/select/option1
INSERT html/body/select/option1/#text
INSERT html/body/select/option2
INSERT html/body/select/option2/#text
```