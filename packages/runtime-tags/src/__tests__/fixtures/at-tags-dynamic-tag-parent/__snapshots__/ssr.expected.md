# Write
```html
  <header class=my-header>Header content</header><main>Body content</main><footer class=my-footer>Footer content</footer>
```

# Render End
```html
<header
  class="my-header"
>
  Header content
</header>
<main>
  Body content
</main>
<footer
  class="my-footer"
>
  Footer content
</footer>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT header
INSERT header/#text
INSERT main
INSERT main/#text
INSERT footer
INSERT footer/#text
```