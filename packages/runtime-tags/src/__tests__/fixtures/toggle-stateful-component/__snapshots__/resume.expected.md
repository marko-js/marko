# Render
```html
<html>
  <head />
  <body>
    <div>
      <div>
        <button>
          0
          <!--M_*3 #text/1-->
        </button>
        <!--M_*3 #button/0-->
      </div>
      <!--M_}1 #div/0 2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {},
        {}, _.b = {
          clickCount: 0,
          "#ClosestBranchId": 2
        }], _.a.onCount = _.b.input_onCount = _._[
          "__tests__/template.marko_0/onCount"
          ](_.a), _.c),
        "__tests__/tags/counter.marko_0_input_onCount_clickCount",
        3
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div />
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {},
        {}, _.b = {
          clickCount: 0,
          "#ClosestBranchId": 2
        }], _.a.onCount = _.b.input_onCount = _._[
          "__tests__/template.marko_0/onCount"
          ](_.a), _.c),
        "__tests__/tags/counter.marko_0_input_onCount_clickCount",
        3
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE div, #comment in html/body/div
```