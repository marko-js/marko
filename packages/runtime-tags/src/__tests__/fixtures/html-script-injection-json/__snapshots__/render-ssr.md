# Render `{"a":"</script><!--<script>"}`
```html
<script
  type="application/ld+json"
>
  {"a":"\u003C/script&gt;\u003C!--\u003Cscript&gt;"}
</script>
```

# Update parseJSON
