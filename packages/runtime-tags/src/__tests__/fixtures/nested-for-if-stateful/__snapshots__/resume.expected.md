# Render
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      Increment 
      <!---->
      0
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Increment 
      <!---->
      0
      <!--M_*5 #text/1-->
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Increment 
      <!---->
      0
      <!--M_*7 #text/1-->
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          counts: [0, 0, 0],
          "ClosureScopes:counts": new Set
        }, _.b = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 0,
          _: _.a
        },
        {
          _: _.b
        }, _.c = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 1,
          _: _.a
        },
        {
          _: _.c
        }, _.d = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 2,
          _: _.a
        },
        {
          _: _.d
        }]),
        "__tests__/template.marko_3 3 5 7"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text0
INSERT html/body/#text1
INSERT html/body/#text2
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      Confirm 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Increment 
      <!---->
      0
      <!--M_*5 #text/1-->
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Increment 
      <!---->
      0
      <!--M_*7 #text/1-->
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          counts: [0, 0, 0],
          "ClosureScopes:counts": new Set
        }, _.b = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 0,
          _: _.a
        },
        {
          _: _.b
        }, _.c = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 1,
          _: _.a
        },
        {
          _: _.c
        }, _.d = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 2,
          _: _.a
        },
        {
          _: _.d
        }]),
        "__tests__/template.marko_3 3 5 7"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button0
REMOVE button after html/body/button0
UPDATE html/body/button0/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      Confirm 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Confirm 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Increment 
      <!---->
      0
      <!--M_*7 #text/1-->
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          counts: [0, 0, 0],
          "ClosureScopes:counts": new Set
        }, _.b = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 0,
          _: _.a
        },
        {
          _: _.b
        }, _.c = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 1,
          _: _.a
        },
        {
          _: _.c
        }, _.d = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 2,
          _: _.a
        },
        {
          _: _.d
        }]),
        "__tests__/template.marko_3 3 5 7"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button1
REMOVE button after html/body/button1
UPDATE html/body/button1/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      Confirm 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Confirm 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Confirm 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          counts: [0, 0, 0],
          "ClosureScopes:counts": new Set
        }, _.b = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 0,
          _: _.a
        },
        {
          _: _.b
        }, _.c = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 1,
          _: _.a
        },
        {
          _: _.c
        }, _.d = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 2,
          _: _.a
        },
        {
          _: _.d
        }]),
        "__tests__/template.marko_3 3 5 7"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button2
REMOVE button after html/body/button2
UPDATE html/body/button2/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      Increment 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Confirm 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Confirm 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          counts: [0, 0, 0],
          "ClosureScopes:counts": new Set
        }, _.b = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 0,
          _: _.a
        },
        {
          _: _.b
        }, _.c = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 1,
          _: _.a
        },
        {
          _: _.c
        }, _.d = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 2,
          _: _.a
        },
        {
          _: _.d
        }]),
        "__tests__/template.marko_3 3 5 7"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button0
REMOVE button after html/body/button0
UPDATE html/body/button0/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      Increment 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Increment 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Confirm 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          counts: [0, 0, 0],
          "ClosureScopes:counts": new Set
        }, _.b = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 0,
          _: _.a
        },
        {
          _: _.b
        }, _.c = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 1,
          _: _.a
        },
        {
          _: _.c
        }, _.d = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 2,
          _: _.a
        },
        {
          _: _.d
        }]),
        "__tests__/template.marko_3 3 5 7"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button1
REMOVE button after html/body/button1
UPDATE html/body/button1/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      Increment 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Increment 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Increment 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          counts: [0, 0, 0],
          "ClosureScopes:counts": new Set
        }, _.b = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 0,
          _: _.a
        },
        {
          _: _.b
        }, _.c = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 1,
          _: _.a
        },
        {
          _: _.c
        }, _.d = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 2,
          _: _.a
        },
        {
          _: _.d
        }]),
        "__tests__/template.marko_3 3 5 7"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button2
REMOVE button after html/body/button2
UPDATE html/body/button2/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      Confirm 2
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Increment 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Increment 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          counts: [0, 0, 0],
          "ClosureScopes:counts": new Set
        }, _.b = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 0,
          _: _.a
        },
        {
          _: _.b
        }, _.c = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 1,
          _: _.a
        },
        {
          _: _.c
        }, _.d = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 2,
          _: _.a
        },
        {
          _: _.d
        }]),
        "__tests__/template.marko_3 3 5 7"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button0
REMOVE button after html/body/button0
UPDATE html/body/button0/#text1 "" => "2"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      Confirm 2
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Confirm 2
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Increment 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          counts: [0, 0, 0],
          "ClosureScopes:counts": new Set
        }, _.b = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 0,
          _: _.a
        },
        {
          _: _.b
        }, _.c = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 1,
          _: _.a
        },
        {
          _: _.c
        }, _.d = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 2,
          _: _.a
        },
        {
          _: _.d
        }]),
        "__tests__/template.marko_3 3 5 7"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button1
REMOVE button after html/body/button1
UPDATE html/body/button1/#text1 "" => "2"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <button>
      Confirm 2
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Confirm 2
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Confirm 2
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          counts: [0, 0, 0],
          "ClosureScopes:counts": new Set
        }, _.b = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 0,
          _: _.a
        },
        {
          _: _.b
        }, _.c = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 1,
          _: _.a
        },
        {
          _: _.c
        }, _.d = {
          "ConditionalRenderer:#text/0": 1,
          count: 0,
          "#LoopKey": 2,
          _: _.a
        },
        {
          _: _.d
        }]),
        "__tests__/template.marko_3 3 5 7"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button2
REMOVE button after html/body/button2
UPDATE html/body/button2/#text1 "" => "2"
```