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
      <option
        selected=""
        value="b"
      >
        B
      </option>
      <option
        value="c"
      >
        C
      </option>
    </select>
    <!--M_*2 #select/0-->
    <span>
      b
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#childScope/0": _.a = {
            "ControlledType:#select/0": 3,
            "ControlledValue:#select/0": "b",
            "BranchScopes:#select/0":
            {},
            "ConditionalRenderer:#select/0": "__tests__/template.marko_1_content",
            input: _.b = {
              value: "b"
            }
          }
        }, _.a], _.a["ControlledHandler:#select/0"] = _.b.valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.d), _.b.content = _._[
          "__tests__/template.marko_1_content"
          ](_.d), _.c),
        "__tests__/tags/my-select.marko_0_input 2"
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
      <option
        value="b"
      >
        B
      </option>
      <option
        selected=""
        value="c"
      >
        C
      </option>
    </select>
    <!--M_*2 #select/0-->
    <span>
      c
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#childScope/0": _.a = {
            "ControlledType:#select/0": 3,
            "ControlledValue:#select/0": "b",
            "BranchScopes:#select/0":
            {},
            "ConditionalRenderer:#select/0": "__tests__/template.marko_1_content",
            input: _.b = {
              value: "b"
            }
          }
        }, _.a], _.a["ControlledHandler:#select/0"] = _.b.valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.d), _.b.content = _._[
          "__tests__/template.marko_1_content"
          ](_.d), _.c),
        "__tests__/tags/my-select.marko_0_input 2"
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