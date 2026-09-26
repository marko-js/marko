# Render `{"value":"red&amp;<x>"}`
```html
<svg>
  <style>
    .a{color:red&amp;&lt;x&gt;}
  </style>
  <script
    type="text/plain"
  >
    &lt;red&amp;&lt;x&gt;
  </script>
  <foreignobject />
</svg>
<math>
  <style>
    .c{color:red&amp;&lt;x&gt;}
  </style>
  <mi />
</math>
```

# Update
```js
assert.deepEqual(
Array.from(
  document.querySelectorAll("style, script[type='text/plain']"),
  (el) => el.textContent,
),
[
  `.a{color:${value}}`,
  `<${value}`,
  `.b{color:${value}}`,
  `.c{color:${value}}`,
  `.d{color:${value}}`,
],
  );
```
