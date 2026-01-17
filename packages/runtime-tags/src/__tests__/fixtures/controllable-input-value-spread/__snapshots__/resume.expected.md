# Render
```html
<html>
  <head />
  <body>
    <input
      type="text"
      value="hello"
    />
    <!--M_*2 #input/0-->
    <span>
      hello
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#childScope/0": _.a = {
            "ControlledType:#input/0": 2,
            input: _.b = {
              type: "text",
              value: "hello"
            }
          }
        }, _.a], _.a["ControlledHandler:#input/0"] = _.b.valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.d), _.c),
        "__tests__/tags/my-input.marko_0_input 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<html>
  <head />
  <body>
    <input
      type="text"
      value="w"
    />
    <!--M_*2 #input/0-->
    <span>
      w
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#childScope/0": _.a = {
            "ControlledType:#input/0": 2,
            input: _.b = {
              type: "text",
              value: "hello"
            }
          }
        }, _.a], _.a["ControlledHandler:#input/0"] = _.b.valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.d), _.c),
        "__tests__/tags/my-input.marko_0_input 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "hello" => "w"
```

# Render
```js
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<html>
  <head />
  <body>
    <input
      type="text"
      value="wor"
    />
    <!--M_*2 #input/0-->
    <span>
      wor
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#childScope/0": _.a = {
            "ControlledType:#input/0": 2,
            input: _.b = {
              type: "text",
              value: "hello"
            }
          }
        }, _.a], _.a["ControlledHandler:#input/0"] = _.b.valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.d), _.c),
        "__tests__/tags/my-input.marko_0_input 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "w" => "wor"
```

# Render
```js
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<html>
  <head />
  <body>
    <input
      type="text"
      value="world"
    />
    <!--M_*2 #input/0-->
    <span>
      world
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#childScope/0": _.a = {
            "ControlledType:#input/0": 2,
            input: _.b = {
              type: "text",
              value: "hello"
            }
          }
        }, _.a], _.a["ControlledHandler:#input/0"] = _.b.valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.d), _.c),
        "__tests__/tags/my-input.marko_0_input 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "wor" => "world"
```