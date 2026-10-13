# Render `{"label":"a"}`
```html
<p>
  a
</p>
```

# Update
```js
const { patch } = document.defaultView
                                                   
;
  const controller = new AbortController();
  controller.abort();
  assert.throws(
 () => patch({ renderId: "_" }, controller.signal),
 /started with an aborted signal/,
  );
```
