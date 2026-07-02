# Render `{"color":"red} :root { display: none } </style><script>alert(1)</script>"}`
```html
<div
  class="box"
>
  Hi
</div>
```

# Update
```js
const text = container.querySelector("style").textContent;
_strict.default.equal(text.slice(text.indexOf("{")).replace(/--[^:]+:/, "--x:"), expected);
```
