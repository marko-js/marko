# Render
```html
<dialog
  open=""
/>
<!--M_*1 #dialog/0-->
<span>
  true
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#dialog/0": 4,
      "ControlledValue:#dialog/0": !0
    }], _.a["ControlledHandler:#dialog/0"] = _._[
      "__tests__/template.marko_0/openChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render
```js
const dialog = container.querySelector("dialog");
dialog.open = !dialog.open;
```
```html
<dialog />
<!--M_*1 #dialog/0-->
<span>
  false
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#dialog/0": 4,
      "ControlledValue:#dialog/0": !0
    }], _.a["ControlledHandler:#dialog/0"] = _._[
      "__tests__/template.marko_0/openChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE dialog[open] "" => null
UPDATE dialog[open] null => null
UPDATE dialog[open] "" => null
UPDATE span/#text "true" => "false"
```

# Render
```js
const dialog = container.querySelector("dialog");
dialog.open = !dialog.open;
```
```html
<dialog
  open=""
/>
<!--M_*1 #dialog/0-->
<span>
  true
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#dialog/0": 4,
      "ControlledValue:#dialog/0": !0
    }], _.a["ControlledHandler:#dialog/0"] = _._[
      "__tests__/template.marko_0/openChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE dialog[open] null => ""
UPDATE dialog[open] "" => ""
UPDATE dialog[open] null => ""
UPDATE span/#text "false" => "true"
```

# Render
```js
const dialog = container.querySelector("dialog");
dialog.open = !dialog.open;
```
```html
<dialog />
<!--M_*1 #dialog/0-->
<span>
  false
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#dialog/0": 4,
      "ControlledValue:#dialog/0": !0
    }], _.a["ControlledHandler:#dialog/0"] = _._[
      "__tests__/template.marko_0/openChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE dialog[open] "" => null
UPDATE dialog[open] null => null
UPDATE dialog[open] "" => null
UPDATE span/#text "true" => "false"
```