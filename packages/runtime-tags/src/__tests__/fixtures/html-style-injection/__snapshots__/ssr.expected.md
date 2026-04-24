# Write
```html
  <style>.evil { content: '\3C/style>'; }</style>
```

# Render End
```html
<style>
  .evil { content: '\3C/style&gt;'; }
</style>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT style
INSERT style/#text
```