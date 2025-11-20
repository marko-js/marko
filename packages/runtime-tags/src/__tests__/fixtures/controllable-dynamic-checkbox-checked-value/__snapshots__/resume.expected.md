# Render
```html
<html>
  <head />
  <body>
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
          "ControlledValue:#input/0": "a",
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": "a",
          show: !0,
          checkedValue: "a"
        }, _.b = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": "a",
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
  </body>
</html>
```


# Render
```js
container.querySelector(`input[value=b]`).click();
```
```html
<html>
  <head />
  <body>
    <input
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
          "ControlledValue:#input/0": "a",
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": "a",
          show: !0,
          checkedValue: "a"
        }, _.b = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": "a",
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
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "a" => "b"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <input
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
          "ControlledValue:#input/0": "a",
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": "a",
          show: !0,
          checkedValue: "a"
        }, _.b = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": "a",
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
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment1 after html/body/#comment2
INSERT html/body/#comment1
REMOVE input after html/body/#comment1
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <input
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
          "ControlledValue:#input/0": "a",
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": "a",
          show: !0,
          checkedValue: "a"
        }, _.b = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": "a",
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
  </body>
</html>
```

# Mutations
```
INSERT html/body/input1
REMOVE #comment after html/body/input1
UPDATE html/body/input1[value] null => "b"
```

# Render
```js
container.querySelector(`input[value=a]`).click();
```
```html
<html>
  <head />
  <body>
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
          "ControlledValue:#input/0": "a",
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": "a",
          show: !0,
          checkedValue: "a"
        }, _.b = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": "a",
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
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "b" => "a"
```