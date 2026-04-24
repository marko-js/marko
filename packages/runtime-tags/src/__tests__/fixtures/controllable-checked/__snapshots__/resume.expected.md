# Render
```html
<input
  type="checkbox"
/>
<!--M_*1 #input/0-->
<span>
  false
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/0": 0
    }], _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("input").click();
```
```html
<input
  checked=""
  type="checkbox"
/>
<!--M_*1 #input/0-->
<span>
  true
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/0": 0
    }], _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text "false" => "true"
```

# Render
```js
container.querySelector("input").click();
```
```html
<input
  type="checkbox"
/>
<!--M_*1 #input/0-->
<span>
  false
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/0": 0
    }], _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text "true" => "false"
```

# Render
```js
container.querySelector("input").click();
```
```html
<input
  checked=""
  type="checkbox"
/>
<!--M_*1 #input/0-->
<span>
  true
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/0": 0
    }], _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text "false" => "true"
```