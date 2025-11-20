# Render
```html
<html>
  <head />
  <body>
    <button>
      Push
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      0.0
      <!--M_*4 #text/0-->
    </div>
    <div>
      0.1
      <!--M_*6 #text/0-->
    </div>
    <!--M_|2 #text/0 5 3-->
    <!--M_[2-->
    <div>
      1.0
      <!--M_*9 #text/0-->
    </div>
    <div>
      1.1
      <!--M_*11 #text/0-->
    </div>
    <!--M_|7 #text/0 10 8-->
    <!--M_]1 #text/1 7-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.h = [0, _.a = {
          items: [0, 1]
        }, _.b = {
          outer: 0,
          _: _.a
        },
        {
          _: _.b,
          "#childScope/0": _.c = {}
        }, _.c,
        {
          _: _.b,
          "#childScope/0": _.d = {}
        }, _.d, _.e = {
          outer: 1,
          _: _.a
        },
        {
          _: _.e,
          "#childScope/0": _.f = {}
        }, _.f,
        {
          _: _.e,
          "#childScope/0": _.g = {}
        }, _.g]),
        "__tests__/template.marko_0_items 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0
INSERT html/body/#text1
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      Push
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      0.0
      <!--M_*4 #text/0-->
    </div>
    <div>
      0.1
      <!--M_*6 #text/0-->
    </div>
    <div>
      0.2
    </div>
    <!--M_|2 #text/0 5 3-->
    <!--M_[2-->
    <div>
      1.0
      <!--M_*9 #text/0-->
    </div>
    <div>
      1.1
      <!--M_*11 #text/0-->
    </div>
    <div>
      1.2
    </div>
    <!--M_|7 #text/0 10 8-->
    <!---->
    <div>
      2.0
    </div>
    <div>
      2.1
    </div>
    <div>
      2.2
    </div>
    <!---->
    <!--M_]1 #text/1 7-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.h = [0, _.a = {
          items: [0, 1]
        }, _.b = {
          outer: 0,
          _: _.a
        },
        {
          _: _.b,
          "#childScope/0": _.c = {}
        }, _.c,
        {
          _: _.b,
          "#childScope/0": _.d = {}
        }, _.d, _.e = {
          outer: 1,
          _: _.a
        },
        {
          _: _.e,
          "#childScope/0": _.f = {}
        }, _.f,
        {
          _: _.e,
          "#childScope/0": _.g = {}
        }, _.g]),
        "__tests__/template.marko_0_items 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment5, #text, html/body/#comment6
INSERT html/body/div2
INSERT html/body/div5
REMOVE #text after html/body/#comment5
INSERT html/body/div6
INSERT html/body/div7
INSERT html/body/div8
UPDATE html/body/div2/#text " " => "0.2"
UPDATE html/body/div5/#text " " => "1.2"
UPDATE html/body/div6/#text " " => "2.0"
UPDATE html/body/div7/#text " " => "2.1"
UPDATE html/body/div8/#text " " => "2.2"
```