# Render
```html
<html>
  <head />
  <body>
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
  </body>
</html>
```


# Render
```js
const dialog = container.querySelector("dialog");
dialog.open = false;
dialog.dispatchEvent(new dialog.ownerDocument.defaultView.Event("close"));
```
```html
<html>
  <head />
  <body>
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
  </body>
</html>
```

# Mutations
```
UPDATE html/body/dialog[open] "" => null
UPDATE html/body/dialog[open] null => null
UPDATE html/body/dialog[open] "" => null
UPDATE html/body/span/#text "true" => "false"
```