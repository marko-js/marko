# Render
```html
<html>
  <head />
  <body>
    <textarea>
      hello
    </textarea>
    <!--M_*2 #textarea/0-->
    <span>
      hello
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
            "#childScope/0": _.a = {
              "ControlledType:#textarea/0": 2,
              input: _.b = {
                value: "hello"
              }
            }
          }, _.a], _.a["ControlledHandler:#textarea/0"] = _.b.valueChange = _
          ._[
            "__tests__/template.marko_0/valueChange"
            ](_.d), _.c),
        "__tests__/tags/my-textarea.marko_0_input 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<html>
  <head />
  <body>
    <textarea>
      w
    </textarea>
    <!--M_*2 #textarea/0-->
    <span>
      w
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
            "#childScope/0": _.a = {
              "ControlledType:#textarea/0": 2,
              input: _.b = {
                value: "hello"
              }
            }
          }, _.a], _.a["ControlledHandler:#textarea/0"] = _.b.valueChange = _
          ._[
            "__tests__/template.marko_0/valueChange"
            ](_.d), _.c),
        "__tests__/tags/my-textarea.marko_0_input 2"
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
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<html>
  <head />
  <body>
    <textarea>
      wor
    </textarea>
    <!--M_*2 #textarea/0-->
    <span>
      wor
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
            "#childScope/0": _.a = {
              "ControlledType:#textarea/0": 2,
              input: _.b = {
                value: "hello"
              }
            }
          }, _.a], _.a["ControlledHandler:#textarea/0"] = _.b.valueChange = _
          ._[
            "__tests__/template.marko_0/valueChange"
            ](_.d), _.c),
        "__tests__/tags/my-textarea.marko_0_input 2"
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
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<html>
  <head />
  <body>
    <textarea>
      world
    </textarea>
    <!--M_*2 #textarea/0-->
    <span>
      world
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
            "#childScope/0": _.a = {
              "ControlledType:#textarea/0": 2,
              input: _.b = {
                value: "hello"
              }
            }
          }, _.a], _.a["ControlledHandler:#textarea/0"] = _.b.valueChange = _
          ._[
            "__tests__/template.marko_0/valueChange"
            ](_.d), _.c),
        "__tests__/tags/my-textarea.marko_0_input 2"
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