# Render
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
    />
    <!--M_*2 #input/0-->
    <span>
      false
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
            "#childScope/0": _.a = {
              "ControlledType:#input/0": 0,
              input: _.b = {
                checked: !1
              }
            }
          }, _.a], _.a["ControlledHandler:#input/0"] = _.b.checkedChange = _
          ._[
            "__tests__/template.marko_0/checkedChange"
            ](_.d), _.c),
        "__tests__/tags/checkbox.marko_0_input",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("input").click();
```
```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="checkbox"
    />
    <!--M_*2 #input/0-->
    <span>
      true
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
            "#childScope/0": _.a = {
              "ControlledType:#input/0": 0,
              input: _.b = {
                checked: !1
              }
            }
          }, _.a], _.a["ControlledHandler:#input/0"] = _.b.checkedChange = _
          ._[
            "__tests__/template.marko_0/checkedChange"
            ](_.d), _.c),
        "__tests__/tags/checkbox.marko_0_input",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "false" => "true"
```

# Render
```js
container.querySelector("input").click();
```
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
    />
    <!--M_*2 #input/0-->
    <span>
      false
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
            "#childScope/0": _.a = {
              "ControlledType:#input/0": 0,
              input: _.b = {
                checked: !1
              }
            }
          }, _.a], _.a["ControlledHandler:#input/0"] = _.b.checkedChange = _
          ._[
            "__tests__/template.marko_0/checkedChange"
            ](_.d), _.c),
        "__tests__/tags/checkbox.marko_0_input",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "true" => "false"
```

# Render
```js
container.querySelector("input").click();
```
```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="checkbox"
    />
    <!--M_*2 #input/0-->
    <span>
      true
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
            "#childScope/0": _.a = {
              "ControlledType:#input/0": 0,
              input: _.b = {
                checked: !1
              }
            }
          }, _.a], _.a["ControlledHandler:#input/0"] = _.b.checkedChange = _
          ._[
            "__tests__/template.marko_0/checkedChange"
            ](_.d), _.c),
        "__tests__/tags/checkbox.marko_0_input",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "false" => "true"
```