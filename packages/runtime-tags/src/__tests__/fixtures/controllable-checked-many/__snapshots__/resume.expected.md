# Render
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
    />
    <!--M_*2 #input/0-->
    <input
      type="checkbox"
    />
    <!--M_*3 #input/0-->
    <input
      type="checkbox"
    />
    <!--M_*4 #input/0-->
    <!--M_|1 #text/0 4 3 2-->
    <div>
      false,false,false
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.b = {
          states: [!1, !1, !1]
        }, _.a = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 0,
          checked: !1,
          _: _.b
        }, _.c = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 1,
          checked: !1,
          _: _.b
        }, _.d = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 2,
          checked: !1,
          _: _.b
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.a), _.a["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.a), _.c["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.c), _.c["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.c), _.d["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.d), _.d["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.d), _.e),
        "__tests__/template.marko_1 2 3 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelectorAll("input").item(0).click();
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
    <input
      type="checkbox"
    />
    <!--M_*3 #input/0-->
    <input
      type="checkbox"
    />
    <!--M_*4 #input/0-->
    <!--M_|1 #text/0 4 3 2-->
    <div>
      true,false,false
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.b = {
          states: [!1, !1, !1]
        }, _.a = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 0,
          checked: !1,
          _: _.b
        }, _.c = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 1,
          checked: !1,
          _: _.b
        }, _.d = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 2,
          checked: !1,
          _: _.b
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.a), _.a["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.a), _.c["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.c), _.c["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.c), _.d["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.d), _.d["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.d), _.e),
        "__tests__/template.marko_1 2 3 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text "false,false,false" => "true,false,false"
```

# Render
```js
container.querySelectorAll("input").item(1).click();
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
    <input
      checked=""
      type="checkbox"
    />
    <!--M_*3 #input/0-->
    <input
      type="checkbox"
    />
    <!--M_*4 #input/0-->
    <!--M_|1 #text/0 4 3 2-->
    <div>
      true,true,false
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.b = {
          states: [!1, !1, !1]
        }, _.a = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 0,
          checked: !1,
          _: _.b
        }, _.c = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 1,
          checked: !1,
          _: _.b
        }, _.d = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 2,
          checked: !1,
          _: _.b
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.a), _.a["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.a), _.c["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.c), _.c["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.c), _.d["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.d), _.d["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.d), _.e),
        "__tests__/template.marko_1 2 3 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text "true,false,false" => "true,true,false"
```

# Render
```js
container.querySelectorAll("input").item(1).click();
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
    <input
      type="checkbox"
    />
    <!--M_*3 #input/0-->
    <input
      type="checkbox"
    />
    <!--M_*4 #input/0-->
    <!--M_|1 #text/0 4 3 2-->
    <div>
      true,false,false
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.b = {
          states: [!1, !1, !1]
        }, _.a = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 0,
          checked: !1,
          _: _.b
        }, _.c = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 1,
          checked: !1,
          _: _.b
        }, _.d = {
          "ControlledType:#input/0": 0,
          "#LoopKey": 2,
          checked: !1,
          _: _.b
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.a), _.a["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.a), _.c["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.c), _.c["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.c), _.d["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_1/checkedChange"
          ](_.d), _.d["TagVariableChange:checked"] = _._[
          "__tests__/template.marko_1/valueChange"
          ](_.d), _.e),
        "__tests__/template.marko_1 2 3 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text "true,true,false" => "true,false,false"
```