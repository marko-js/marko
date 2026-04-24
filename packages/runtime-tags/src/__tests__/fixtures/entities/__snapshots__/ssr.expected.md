# Write
```html
  Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;
```

# Render End
```html
Hello John & Suzy Invalid Entity: &b ; Valid Numeric Entity: " Valid Hexadecimal Entity: ¢
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #text
```