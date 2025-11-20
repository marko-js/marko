# Render
```html
<html>
  <head />
  <body>
    <select>
      <option
        value="a"
      >
        A
      </option>
      <!--M_*3 #option/0-->
      <option
        selected=""
        value="b"
      >
        B
      </option>
      <!--M_*3 #option/1-->
      <option
        value="c"
      >
        C
      </option>
      <!--M_*3 #option/2-->
    </select>
    <!--M_'1 #text/0 2-->
    <span>
      b
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "ConditionalRenderer:#text/0": "select",
          tag: "select"
        }, _.a = {
          "ControlledType:#select/0": 3,
          "ControlledValue:#select/0": "b",
          "#Renderer": "select"
        },
        {}], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.c), _.b),
        "__tests__/template.marko_1 3 _dynamicTagScript 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
const select = container.querySelector(`select`);
const window = select.ownerDocument.defaultView;
select.value = "c";
select.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<html>
  <head />
  <body>
    <select>
      <option
        value="a"
      >
        A
      </option>
      <!--M_*3 #option/0-->
      <option
        value="b"
      >
        B
      </option>
      <!--M_*3 #option/1-->
      <option
        selected=""
        value="c"
      >
        C
      </option>
      <!--M_*3 #option/2-->
    </select>
    <!--M_'1 #text/0 2-->
    <span>
      c
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "ConditionalRenderer:#text/0": "select",
          tag: "select"
        }, _.a = {
          "ControlledType:#select/0": 3,
          "ControlledValue:#select/0": "b",
          "#Renderer": "select"
        },
        {}], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.c), _.b),
        "__tests__/template.marko_1 3 _dynamicTagScript 2"
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