# Render
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      0
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <button
      data-parent="0"
      id="class"
    >
      0
    </button>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
        "ConditionalScope:#text/2": _.b = {
          m5c: "_0"
        },
        "ConditionalRenderer:#text/2": _._[
          "__tests__/components/class-counter.marko"
          ],
        count: 0
      }, _.b], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_
        .a["ConditionalRenderer:#text/2"]), _.c)];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0,
          {
            "count": 0
          },
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/components/class-counter.marko"
        ]
      });
      M._.r.push("$compat_setScope", 2,
        "__tests__/template.marko_0_count",
        1);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text2
INSERT html/body/#text0
INSERT html/body/#text1
REMOVE #comment after html/body/#comment1
REMOVE #comment after html/body/#text1
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <button
      data-parent="1"
      id="class"
    >
      0
    </button>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
        "ConditionalScope:#text/2": _.b = {
          m5c: "_0"
        },
        "ConditionalRenderer:#text/2": _._[
          "__tests__/components/class-counter.marko"
          ],
        count: 0
      }, _.b], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_
        .a["ConditionalRenderer:#text/2"]), _.c)];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0,
          {
            "count": 0
          },
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/components/class-counter.marko"
        ]
      });
      M._.r.push("$compat_setScope", 2,
        "__tests__/template.marko_0_count",
        1);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "0" => "1"
UPDATE html/body/button1[data-parent] "0" => "1"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <button
      data-parent="1"
      id="class"
    >
      1
    </button>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
        "ConditionalScope:#text/2": _.b = {
          m5c: "_0"
        },
        "ConditionalRenderer:#text/2": _._[
          "__tests__/components/class-counter.marko"
          ],
        count: 0
      }, _.b], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_
        .a["ConditionalRenderer:#text/2"]), _.c)];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0,
          {
            "count": 0
          },
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/components/class-counter.marko"
        ]
      });
      M._.r.push("$compat_setScope", 2,
        "__tests__/template.marko_0_count",
        1);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button1/#text "0" => "1"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <button
      data-parent="2"
      id="class"
    >
      1
    </button>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
        "ConditionalScope:#text/2": _.b = {
          m5c: "_0"
        },
        "ConditionalRenderer:#text/2": _._[
          "__tests__/components/class-counter.marko"
          ],
        count: 0
      }, _.b], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_
        .a["ConditionalRenderer:#text/2"]), _.c)];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0,
          {
            "count": 0
          },
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/components/class-counter.marko"
        ]
      });
      M._.r.push("$compat_setScope", 2,
        "__tests__/template.marko_0_count",
        1);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "1" => "2"
UPDATE html/body/button1[data-parent] "1" => "2"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <button
      data-parent="2"
      id="class"
    >
      2
    </button>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
        "ConditionalScope:#text/2": _.b = {
          m5c: "_0"
        },
        "ConditionalRenderer:#text/2": _._[
          "__tests__/components/class-counter.marko"
          ],
        count: 0
      }, _.b], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_
        .a["ConditionalRenderer:#text/2"]), _.c)];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0,
          {
            "count": 0
          },
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/components/class-counter.marko"
        ]
      });
      M._.r.push("$compat_setScope", 2,
        "__tests__/template.marko_0_count",
        1);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button1/#text "1" => "2"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <button
      data-parent="3"
      id="class"
    >
      2
    </button>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
        "ConditionalScope:#text/2": _.b = {
          m5c: "_0"
        },
        "ConditionalRenderer:#text/2": _._[
          "__tests__/components/class-counter.marko"
          ],
        count: 0
      }, _.b], _.a["ConditionalRenderer:#text/2"] = _._.$compat_renderer(_
        .a["ConditionalRenderer:#text/2"]), _.c)];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0,
          {
            "count": 0
          },
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/components/class-counter.marko"
        ]
      });
      M._.r.push("$compat_setScope", 2,
        "__tests__/template.marko_0_count",
        1);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "2" => "3"
UPDATE html/body/button1[data-parent] "2" => "3"
```