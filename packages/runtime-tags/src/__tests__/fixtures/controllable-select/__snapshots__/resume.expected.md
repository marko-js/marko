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
    <!--M_*1 #select/0-->
    <span>
      b
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          "ControlledValue:#select/0": "b",
          value: "b"
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
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
    <!--M_*1 #select/0-->
    <span>
      c
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          "ControlledValue:#select/0": "b",
          value: "b"
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
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
UPDATE html/body/span/#text "b" => "c"
```