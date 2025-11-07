# Render
```html
<html>
  <head />
  <body>
    <select>
      <option
        selected=""
      >
        0
      </option>
      <!--M_*2 #option/0-->
      <option>
        1
      </option>
      <!--M_*3 #option/0-->
      <option>
        2
      </option>
      <!--M_*4 #option/0-->
    </select>
    <!--M_*1 #select/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {},
        {
          i: 0,
          _: _.a
        },
        {
          i: 1,
          _: _.a
        },
        {
          i: 2,
          _: _.a
        }]),
        "__tests__/template.marko_0",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
const select = container.querySelector("select");
select.value = select.options[2].value;
select.dispatchEvent(new select.ownerDocument.defaultView.Event("change", {
  bubbles: true
}));
```
```html
<html>
  <head />
  <body>
    <select>
      <option>
        0
      </option>
      <!--M_*2 #option/0-->
      <option>
        1
      </option>
      <!--M_*3 #option/0-->
      <option
        selected=""
      >
        2
      </option>
      <!--M_*4 #option/0-->
    </select>
    <!--M_*1 #select/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {},
        {
          i: 0,
          _: _.a
        },
        {
          i: 1,
          _: _.a
        },
        {
          i: 2,
          _: _.a
        }]),
        "__tests__/template.marko_0",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```
