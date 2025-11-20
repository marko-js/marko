# Render
```html
<html>
  <head />
  <body>
    <button
      data-internal="0"
      id="controlled"
    >
      0
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <button
      data-internal="0"
      id="uncontrolled"
    >
      0
      <!--M_*5 #text/0-->
    </button>
    <!--M_*4 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.b = {
          "ClosureScopes:x": _.e = new Set,
          "#childScope/0": _.a = {
            x: 0
          },
          "#childScope/1": _.c = {
            x: 0
          }
        }, _.a, _.f = {
          _: _.b,
          "ClosureSignalIndex:x": 0
        }, _.c, _.g = {
          _: _.b,
          "ClosureSignalIndex:x": 1
        }], _.a.$countChange = _.a["TagVariableChange:x"] = _._[
          "__tests__/template.marko_0/countChange"
          ](_.b), (_.e).add(_.f), _.e.add(_.g), _.d),
        "__tests__/tags/counter.marko_0_x 2 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("#controlled").click();
```
```html
<html>
  <head />
  <body>
    <button
      data-internal="1"
      id="controlled"
    >
      1
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <button
      data-internal="0"
      id="uncontrolled"
    >
      1
      <!--M_*5 #text/0-->
    </button>
    <!--M_*4 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.b = {
          "ClosureScopes:x": _.e = new Set,
          "#childScope/0": _.a = {
            x: 0
          },
          "#childScope/1": _.c = {
            x: 0
          }
        }, _.a, _.f = {
          _: _.b,
          "ClosureSignalIndex:x": 0
        }, _.c, _.g = {
          _: _.b,
          "ClosureSignalIndex:x": 1
        }], _.a.$countChange = _.a["TagVariableChange:x"] = _._[
          "__tests__/template.marko_0/countChange"
          ](_.b), (_.e).add(_.f), _.e.add(_.g), _.d),
        "__tests__/tags/counter.marko_0_x 2 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0[data-internal] "0" => "1"
UPDATE html/body/button0/#text "0" => "1"
UPDATE html/body/button1/#text "0" => "1"
```

# Render
```js
container.querySelector("#uncontrolled").click();
```
```html
<html>
  <head />
  <body>
    <button
      data-internal="1"
      id="controlled"
    >
      1
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <button
      data-internal="1"
      id="uncontrolled"
    >
      1
      <!--M_*5 #text/0-->
    </button>
    <!--M_*4 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.b = {
          "ClosureScopes:x": _.e = new Set,
          "#childScope/0": _.a = {
            x: 0
          },
          "#childScope/1": _.c = {
            x: 0
          }
        }, _.a, _.f = {
          _: _.b,
          "ClosureSignalIndex:x": 0
        }, _.c, _.g = {
          _: _.b,
          "ClosureSignalIndex:x": 1
        }], _.a.$countChange = _.a["TagVariableChange:x"] = _._[
          "__tests__/template.marko_0/countChange"
          ](_.b), (_.e).add(_.f), _.e.add(_.g), _.d),
        "__tests__/tags/counter.marko_0_x 2 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button1[data-internal] "0" => "1"
```

# Render
```js
container.querySelector("#controlled").click();
```
```html
<html>
  <head />
  <body>
    <button
      data-internal="2"
      id="controlled"
    >
      2
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <button
      data-internal="1"
      id="uncontrolled"
    >
      2
      <!--M_*5 #text/0-->
    </button>
    <!--M_*4 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.b = {
          "ClosureScopes:x": _.e = new Set,
          "#childScope/0": _.a = {
            x: 0
          },
          "#childScope/1": _.c = {
            x: 0
          }
        }, _.a, _.f = {
          _: _.b,
          "ClosureSignalIndex:x": 0
        }, _.c, _.g = {
          _: _.b,
          "ClosureSignalIndex:x": 1
        }], _.a.$countChange = _.a["TagVariableChange:x"] = _._[
          "__tests__/template.marko_0/countChange"
          ](_.b), (_.e).add(_.f), _.e.add(_.g), _.d),
        "__tests__/tags/counter.marko_0_x 2 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0[data-internal] "1" => "2"
UPDATE html/body/button0/#text "1" => "2"
UPDATE html/body/button1/#text "1" => "2"
```

# Render
```js
container.querySelector("#uncontrolled").click();
```
```html
<html>
  <head />
  <body>
    <button
      data-internal="2"
      id="controlled"
    >
      2
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <button
      data-internal="2"
      id="uncontrolled"
    >
      2
      <!--M_*5 #text/0-->
    </button>
    <!--M_*4 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.b = {
          "ClosureScopes:x": _.e = new Set,
          "#childScope/0": _.a = {
            x: 0
          },
          "#childScope/1": _.c = {
            x: 0
          }
        }, _.a, _.f = {
          _: _.b,
          "ClosureSignalIndex:x": 0
        }, _.c, _.g = {
          _: _.b,
          "ClosureSignalIndex:x": 1
        }], _.a.$countChange = _.a["TagVariableChange:x"] = _._[
          "__tests__/template.marko_0/countChange"
          ](_.b), (_.e).add(_.f), _.e.add(_.g), _.d),
        "__tests__/tags/counter.marko_0_x 2 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button1[data-internal] "1" => "2"
```

# Render
```js
container.querySelector("#controlled").click();
```
```html
<html>
  <head />
  <body>
    <button
      data-internal="3"
      id="controlled"
    >
      3
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <button
      data-internal="2"
      id="uncontrolled"
    >
      3
      <!--M_*5 #text/0-->
    </button>
    <!--M_*4 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.b = {
          "ClosureScopes:x": _.e = new Set,
          "#childScope/0": _.a = {
            x: 0
          },
          "#childScope/1": _.c = {
            x: 0
          }
        }, _.a, _.f = {
          _: _.b,
          "ClosureSignalIndex:x": 0
        }, _.c, _.g = {
          _: _.b,
          "ClosureSignalIndex:x": 1
        }], _.a.$countChange = _.a["TagVariableChange:x"] = _._[
          "__tests__/template.marko_0/countChange"
          ](_.b), (_.e).add(_.f), _.e.add(_.g), _.d),
        "__tests__/tags/counter.marko_0_x 2 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0[data-internal] "2" => "3"
UPDATE html/body/button0/#text "2" => "3"
UPDATE html/body/button1/#text "2" => "3"
```

# Render
```js
container.querySelector("#uncontrolled").click();
```
```html
<html>
  <head />
  <body>
    <button
      data-internal="3"
      id="controlled"
    >
      3
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <button
      data-internal="3"
      id="uncontrolled"
    >
      3
      <!--M_*5 #text/0-->
    </button>
    <!--M_*4 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.b = {
          "ClosureScopes:x": _.e = new Set,
          "#childScope/0": _.a = {
            x: 0
          },
          "#childScope/1": _.c = {
            x: 0
          }
        }, _.a, _.f = {
          _: _.b,
          "ClosureSignalIndex:x": 0
        }, _.c, _.g = {
          _: _.b,
          "ClosureSignalIndex:x": 1
        }], _.a.$countChange = _.a["TagVariableChange:x"] = _._[
          "__tests__/template.marko_0/countChange"
          ](_.b), (_.e).add(_.f), _.e.add(_.g), _.d),
        "__tests__/tags/counter.marko_0_x 2 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button1[data-internal] "2" => "3"
```