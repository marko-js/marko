# Write
```html
  <section><span>Hello</span></section><div>0</div>
```

# Render End
```html
<html>
  <head />
  <body>
    <section>
      <span>
        Hello
      </span>
    </section>
    <div>
      0
    </div>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/section
INSERT html/body/section/span
INSERT html/body/section/span/#text
INSERT html/body/div
INSERT html/body/div/#text
```