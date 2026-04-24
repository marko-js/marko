# Render
```html
<div />
<!--M_*1 #div/0-->
<button />
<!--M_*2 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {},
    {
      input_message: "hello",
      _: _.a
    }]),
    "__tests__/template.marko_1_input_message 2"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div>
  [onClick(hello)]
</div>
<!--M_*1 #div/0-->
<button />
<!--M_*2 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {},
    {
      input_message: "hello",
      _: _.a
    }]),
    "__tests__/template.marko_1_input_message 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  [onClick(hello)][onClick(hello)]
</div>
<!--M_*1 #div/0-->
<button />
<!--M_*2 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {},
    {
      input_message: "hello",
      _: _.a
    }]),
    "__tests__/template.marko_1_input_message 2"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  [onClick(hello)][onClick(hello)][onClick(hello)]
</div>
<!--M_*1 #div/0-->
<button />
<!--M_*2 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {},
    {
      input_message: "hello",
      _: _.a
    }]),
    "__tests__/template.marko_1_input_message 2"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```