# Render `{"a":"</script><!--<script>"}`
```html
<script
  type="application/ld+json"
>
  {"a":"&lt;/script&gt;&lt;!--&lt;script&gt;"}
</script>
```

# Update
```js
const script = document.querySelector("[type='application/ld+json']");
assert.deepEqual(JSON.parse(script.textContent), { a });
```
