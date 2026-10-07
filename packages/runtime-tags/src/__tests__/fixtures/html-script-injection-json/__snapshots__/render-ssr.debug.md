# Render `{"a":"</script><!--<script>"}`
```html
<script
  type="application/ld+json"
>
  {"a":"\u003C/script&gt;\u003C!--\u003Cscript&gt;"}
</script>
```

# Update
```js
const script = document.querySelector("[type='application/ld+json']");
assert.deepEqual(JSON.parse(script.textContent), { a });
```
