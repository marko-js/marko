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
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          "BranchScopes:#select/0": [_.b = {
            "#LoopKey": 0
          }, _.c = {
            "#LoopKey": 1
          }, _.d = {
            "#LoopKey": 2
          }]
        }, _.b, _.c, _.d], _.b._ = _.c._ = _.d._ = _.a, _.e),
        "__tests__/template.marko_0 1"
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
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          "BranchScopes:#select/0": [_.b = {
            "#LoopKey": 0
          }, _.c = {
            "#LoopKey": 1
          }, _.d = {
            "#LoopKey": 2
          }]
        }, _.b, _.c, _.d], _.b._ = _.c._ = _.d._ = _.a, _.e),
        "__tests__/template.marko_0 1"
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