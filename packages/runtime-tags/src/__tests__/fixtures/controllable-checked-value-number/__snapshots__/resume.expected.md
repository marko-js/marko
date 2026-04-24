# Render
```html
<input
  checked=""
  type="radio"
  value="0"
/>
<!--M_*1 #input/0-->
<input
  type="radio"
  value="1"
/>
<!--M_*1 #input/1-->
<input
  type="radio"
  value="2"
/>
<!--M_*1 #input/2-->
<span>
  0
  <!--M_*1 #text/3-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/0": 1,
      "ControlledType:#input/1": 1,
      "ControlledType:#input/2": 1
    }], _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedValueChange"
      ](_.a), _.a["ControlledHandler:#input/1"] = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.a["ControlledHandler:#input/2"] = _._[
      "__tests__/template.marko_0/checkedValueChange3"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelectorAll(`input`)[1].click();
```
```html
<input
  default-checked=""
  type="radio"
  value="0"
/>
<!--M_*1 #input/0-->
<input
  checked=""
  type="radio"
  value="1"
/>
<!--M_*1 #input/1-->
<input
  type="radio"
  value="2"
/>
<!--M_*1 #input/2-->
<span>
  1
  <!--M_*1 #text/3-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/0": 1,
      "ControlledType:#input/1": 1,
      "ControlledType:#input/2": 1
    }], _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedValueChange"
      ](_.a), _.a["ControlledHandler:#input/1"] = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.a["ControlledHandler:#input/2"] = _._[
      "__tests__/template.marko_0/checkedValueChange3"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text "0" => "1"
```

# Render
```js
container.querySelectorAll(`input`)[2].click();
```
```html
<input
  default-checked=""
  type="radio"
  value="0"
/>
<!--M_*1 #input/0-->
<input
  type="radio"
  value="1"
/>
<!--M_*1 #input/1-->
<input
  checked=""
  type="radio"
  value="2"
/>
<!--M_*1 #input/2-->
<span>
  2
  <!--M_*1 #text/3-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/0": 1,
      "ControlledType:#input/1": 1,
      "ControlledType:#input/2": 1
    }], _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedValueChange"
      ](_.a), _.a["ControlledHandler:#input/1"] = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.a["ControlledHandler:#input/2"] = _._[
      "__tests__/template.marko_0/checkedValueChange3"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text "1" => "2"
```

# Render
```js
container.querySelectorAll(`input`)[0].click();
```
```html
<input
  checked=""
  type="radio"
  value="0"
/>
<!--M_*1 #input/0-->
<input
  type="radio"
  value="1"
/>
<!--M_*1 #input/1-->
<input
  type="radio"
  value="2"
/>
<!--M_*1 #input/2-->
<span>
  0
  <!--M_*1 #text/3-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/0": 1,
      "ControlledType:#input/1": 1,
      "ControlledType:#input/2": 1
    }], _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedValueChange"
      ](_.a), _.a["ControlledHandler:#input/1"] = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.a["ControlledHandler:#input/2"] = _._[
      "__tests__/template.marko_0/checkedValueChange3"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text "2" => "0"
```