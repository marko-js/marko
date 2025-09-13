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
      M._.r = [_ =&gt; (_.f = [0, _.b = {
          "LoopScopeMap:#select/0": new Map(_.a = [
            [0, _.c = {
              i: 0
            }],
            [1, _.d = {
              i: 1
            }],
            [2, _.e = {
              i: 2
            }]
          ])
        }, _.c, _.d, _.e], _.c._ = _.d._ = _.e._ = _.b, _.f),
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
      M._.r = [_ =&gt; (_.f = [0, _.b = {
          "LoopScopeMap:#select/0": new Map(_.a = [
            [0, _.c = {
              i: 0
            }],
            [1, _.d = {
              i: 1
            }],
            [2, _.e = {
              i: 2
            }]
          ])
        }, _.c, _.d, _.e], _.c._ = _.d._ = _.e._ = _.b, _.f),
        "__tests__/template.marko_0",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/select/option0[selected] "" => null
```