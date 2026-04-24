# Render
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<!--M_*1 #input/0-->
<input
  type="radio"
  value="b"
/>
<!--M_*2 #input/0-->
<!--M_|1 #text/1 2-->
<input
  type="radio"
  value="c"
/>
<!--M_*1 #input/2-->
<span>
  a
  <!--M_*1 #text/3-->
</span>
<button>
  Toggle
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      "ControlledType:#input/0": 1,
      "ControlledType:#input/2": 1,
      show: !0,
      checkedValue: "a"
    }, _.b = {
      "ControlledType:#input/0": 1,
      _: _.a
    }], _.a["ControlledHandler:#input/0"] = _.a[
      "ControlledHandler:#input/2"] = _.a.$checkedValueChange = _.b[
      "ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.c),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_show 1 __tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector(`input[value=b]`).click();
```
```html
<input
  default-checked=""
  type="radio"
  value="a"
/>
<!--M_*1 #input/0-->
<input
  checked=""
  type="radio"
  value="b"
/>
<!--M_*2 #input/0-->
<!--M_|1 #text/1 2-->
<input
  type="radio"
  value="c"
/>
<!--M_*1 #input/2-->
<span>
  b
  <!--M_*1 #text/3-->
</span>
<button>
  Toggle
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      "ControlledType:#input/0": 1,
      "ControlledType:#input/2": 1,
      show: !0,
      checkedValue: "a"
    }, _.b = {
      "ControlledType:#input/0": 1,
      _: _.a
    }], _.a["ControlledHandler:#input/0"] = _.a[
      "ControlledHandler:#input/2"] = _.a.$checkedValueChange = _.b[
      "ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.c),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_show 1 __tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text "a" => "b"
```

# Render
```js
container.querySelector("button").click();
```
```html
<input
  default-checked=""
  type="radio"
  value="a"
/>
<!--M_*1 #input/0-->
<!--M_|1 #text/1 2-->
<!--M_*2 #input/0-->
<input
  type="radio"
  value="c"
/>
<!--M_*1 #input/2-->
<span>
  b
  <!--M_*1 #text/3-->
</span>
<button>
  Toggle
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      "ControlledType:#input/0": 1,
      "ControlledType:#input/2": 1,
      show: !0,
      checkedValue: "a"
    }, _.b = {
      "ControlledType:#input/0": 1,
      _: _.a
    }], _.a["ControlledHandler:#input/0"] = _.a[
      "ControlledHandler:#input/2"] = _.a.$checkedValueChange = _.b[
      "ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.c),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_show 1 __tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment1 after #comment2
INSERT #comment1
REMOVE input after #comment1
```

# Render
```js
container.querySelector("button").click();
```
```html
<input
  default-checked=""
  type="radio"
  value="a"
/>
<!--M_*1 #input/0-->
<input
  checked=""
  type="radio"
  value="b"
/>
<!--M_*2 #input/0-->
<input
  type="radio"
  value="c"
/>
<!--M_*1 #input/2-->
<span>
  b
  <!--M_*1 #text/3-->
</span>
<button>
  Toggle
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      "ControlledType:#input/0": 1,
      "ControlledType:#input/2": 1,
      show: !0,
      checkedValue: "a"
    }, _.b = {
      "ControlledType:#input/0": 1,
      _: _.a
    }], _.a["ControlledHandler:#input/0"] = _.a[
      "ControlledHandler:#input/2"] = _.a.$checkedValueChange = _.b[
      "ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.c),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_show 1 __tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT input1
REMOVE #comment after input1
UPDATE input1[value] null => "b"
UPDATE input1[checked] null => ""
```

# Render
```js
container.querySelector(`input[value=a]`).click();
```
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<!--M_*1 #input/0-->
<input
  default-checked=""
  type="radio"
  value="b"
/>
<!--M_*2 #input/0-->
<input
  type="radio"
  value="c"
/>
<!--M_*1 #input/2-->
<span>
  a
  <!--M_*1 #text/3-->
</span>
<button>
  Toggle
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      "ControlledType:#input/0": 1,
      "ControlledType:#input/2": 1,
      show: !0,
      checkedValue: "a"
    }, _.b = {
      "ControlledType:#input/0": 1,
      _: _.a
    }], _.a["ControlledHandler:#input/0"] = _.a[
      "ControlledHandler:#input/2"] = _.a.$checkedValueChange = _.b[
      "ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.c),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_show 1 __tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text "b" => "a"
```