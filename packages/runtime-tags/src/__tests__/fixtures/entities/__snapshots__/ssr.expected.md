# Write
```html
  Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;
```

# Render End
```html
<html>
  <head />
  <body>
    Hello John & Suzy Invalid Entity: &b ; Valid Numeric Entity: " Valid Hexadecimal Entity: ¢
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text
```