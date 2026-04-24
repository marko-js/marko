# Write
```html
  <section><span>Hello</span></section><div>0</div>
```

# Render End
```html
<section>
  <span>
    Hello
  </span>
</section>
<div>
  0
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT section
INSERT section/span
INSERT section/span/#text
INSERT div
INSERT div/#text
```