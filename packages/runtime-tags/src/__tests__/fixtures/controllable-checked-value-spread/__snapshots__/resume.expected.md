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
    <!--M_*2 #input/0-->
    <input
      type="radio"
      value="b"
    />
    <!--M_*3 #input/0-->
    <input
      type="radio"
      value="c"
    />
    <!--M_*4 #input/0-->
    <span>
      a
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.h = [0, _.a = {
          "#childScope/0": _.b = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.c = {
              checkedValue: "a",
              value: "a"
            }
          },
          "#childScope/1": _.d = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.e = {
              checkedValue: "a",
              value: "b"
            }
          },
          "#childScope/2": _.f = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.g = {
              checkedValue: "a",
              value: "c"
            }
          }
        }, _.b, _.d, _.f], _.a.$checkedValueChange = _.b[
          "ControlledHandler:#input/0"] = _.c.checkedValueChange = _.d[
          "ControlledHandler:#input/0"] = _.e.checkedValueChange = _.f[
          "ControlledHandler:#input/0"] = _.g.checkedValueChange = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.h),
        "__tests__/tags/radio.marko_0_input 2 3 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelectorAll(`input`)[1].click();
```
```html
<html>
  <head />
  <body>
    <input
      type="radio"
      value="a"
    />
    <!--M_*2 #input/0-->
    <input
      checked=""
      type="radio"
      value="b"
    />
    <!--M_*3 #input/0-->
    <input
      type="radio"
      value="c"
    />
    <!--M_*4 #input/0-->
    <span>
      b
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.h = [0, _.a = {
          "#childScope/0": _.b = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.c = {
              checkedValue: "a",
              value: "a"
            }
          },
          "#childScope/1": _.d = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.e = {
              checkedValue: "a",
              value: "b"
            }
          },
          "#childScope/2": _.f = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.g = {
              checkedValue: "a",
              value: "c"
            }
          }
        }, _.b, _.d, _.f], _.a.$checkedValueChange = _.b[
          "ControlledHandler:#input/0"] = _.c.checkedValueChange = _.d[
          "ControlledHandler:#input/0"] = _.e.checkedValueChange = _.f[
          "ControlledHandler:#input/0"] = _.g.checkedValueChange = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.h),
        "__tests__/tags/radio.marko_0_input 2 3 4"
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
container.querySelectorAll(`input`)[2].click();
```
```html
<html>
  <head />
  <body>
    <input
      type="radio"
      value="a"
    />
    <!--M_*2 #input/0-->
    <input
      type="radio"
      value="b"
    />
    <!--M_*3 #input/0-->
    <input
      checked=""
      type="radio"
      value="c"
    />
    <!--M_*4 #input/0-->
    <span>
      c
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.h = [0, _.a = {
          "#childScope/0": _.b = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.c = {
              checkedValue: "a",
              value: "a"
            }
          },
          "#childScope/1": _.d = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.e = {
              checkedValue: "a",
              value: "b"
            }
          },
          "#childScope/2": _.f = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.g = {
              checkedValue: "a",
              value: "c"
            }
          }
        }, _.b, _.d, _.f], _.a.$checkedValueChange = _.b[
          "ControlledHandler:#input/0"] = _.c.checkedValueChange = _.d[
          "ControlledHandler:#input/0"] = _.e.checkedValueChange = _.f[
          "ControlledHandler:#input/0"] = _.g.checkedValueChange = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.h),
        "__tests__/tags/radio.marko_0_input 2 3 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "b" => "c"
```

# Render
```js
container.querySelectorAll(`input`)[0].click();
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
    <!--M_*2 #input/0-->
    <input
      type="radio"
      value="b"
    />
    <!--M_*3 #input/0-->
    <input
      type="radio"
      value="c"
    />
    <!--M_*4 #input/0-->
    <span>
      a
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.h = [0, _.a = {
          "#childScope/0": _.b = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.c = {
              checkedValue: "a",
              value: "a"
            }
          },
          "#childScope/1": _.d = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.e = {
              checkedValue: "a",
              value: "b"
            }
          },
          "#childScope/2": _.f = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            input: _.g = {
              checkedValue: "a",
              value: "c"
            }
          }
        }, _.b, _.d, _.f], _.a.$checkedValueChange = _.b[
          "ControlledHandler:#input/0"] = _.c.checkedValueChange = _.d[
          "ControlledHandler:#input/0"] = _.e.checkedValueChange = _.f[
          "ControlledHandler:#input/0"] = _.g.checkedValueChange = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.h),
        "__tests__/tags/radio.marko_0_input 2 3 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "c" => "a"
```