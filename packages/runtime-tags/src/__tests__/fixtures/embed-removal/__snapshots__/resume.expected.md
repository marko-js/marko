# Render
```html
<button>
  Cleanup
</button>
<!--Membedded*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
  ];
  M.embedded.w()
</script>
```

# Mutations
```
INSERT #text
```

# Render
```js
container.querySelector("button").click();
```
# Mutations
```
REMOVE button, #comment, #text, script in #document/html/body
```
# Console
```
LOG "cleaned up"
```