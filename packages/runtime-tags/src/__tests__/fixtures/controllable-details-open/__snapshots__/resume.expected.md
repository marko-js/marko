# Render
```html
<details>
  <summary />
</details>
<!--M_*1 #details/0-->
<span>
  false
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#details/0": 4
    }], _.a["ControlledHandler:#details/0"] = _._[
      "__tests__/template.marko_0/openChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render
```js
const details = container.querySelector("details");
details.open = !details.open;
```
```html
<details
  open=""
>
  <summary />
</details>
<!--M_*1 #details/0-->
<span>
  true
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#details/0": 4
    }], _.a["ControlledHandler:#details/0"] = _._[
      "__tests__/template.marko_0/openChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE details[open] null => ""
UPDATE details[open] "" => ""
UPDATE details[open] null => ""
UPDATE span/#text "false" => "true"
```

# Render
```js
const details = container.querySelector("details");
details.open = !details.open;
```
```html
<details>
  <summary />
</details>
<!--M_*1 #details/0-->
<span>
  false
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#details/0": 4
    }], _.a["ControlledHandler:#details/0"] = _._[
      "__tests__/template.marko_0/openChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE details[open] "" => null
UPDATE details[open] null => null
UPDATE details[open] "" => null
UPDATE span/#text "true" => "false"
```

# Render
```js
const details = container.querySelector("details");
details.open = !details.open;
```
```html
<details
  open=""
>
  <summary />
</details>
<!--M_*1 #details/0-->
<span>
  true
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#details/0": 4
    }], _.a["ControlledHandler:#details/0"] = _._[
      "__tests__/template.marko_0/openChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE details[open] null => ""
UPDATE details[open] "" => ""
UPDATE details[open] null => ""
UPDATE span/#text "false" => "true"
```