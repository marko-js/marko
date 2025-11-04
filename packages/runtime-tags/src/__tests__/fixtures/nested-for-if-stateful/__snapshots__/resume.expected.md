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
      M._.r = [_ =&gt; (_.i = [0, _.d = {
            "LoopScopeMap:#text/0": new Map(_.a = [
              [0, _.b = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.c = {},
                count: 0,
                i: 0
              }],
              [1, _.e = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.f = {},
                count: 0,
                i: 1
              }],
              [2, _.g = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.h = {},
                count: 0,
                i: 2
              }]
            ]),
            counts: [0, 0, 0],
            "ClosureScopes:counts": new Set
          }, , _.c, , _.f, , _.h], _.c._ = _.i[2] = _.b, _.b._ = _.e._ = _.g
          ._ = _.d, _.f._ = _.i[4] = _.e, _.h._ = _.i[6] = _.g, _.i),
        "__tests__/template.marko_3",
        3, 5, 7
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
      M._.r = [_ =&gt; (_.i = [0, _.d = {
            "LoopScopeMap:#text/0": new Map(_.a = [
              [0, _.b = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.c = {},
                count: 0,
                i: 0
              }],
              [1, _.e = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.f = {},
                count: 0,
                i: 1
              }],
              [2, _.g = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.h = {},
                count: 0,
                i: 2
              }]
            ]),
            counts: [0, 0, 0],
            "ClosureScopes:counts": new Set
          }, , _.c, , _.f, , _.h], _.c._ = _.i[2] = _.b, _.b._ = _.e._ = _.g
          ._ = _.d, _.f._ = _.i[4] = _.e, _.h._ = _.i[6] = _.g, _.i),
        "__tests__/template.marko_3",
        3, 5, 7
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
      M._.r = [_ =&gt; (_.i = [0, _.d = {
            "LoopScopeMap:#text/0": new Map(_.a = [
              [0, _.b = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.c = {},
                count: 0,
                i: 0
              }],
              [1, _.e = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.f = {},
                count: 0,
                i: 1
              }],
              [2, _.g = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.h = {},
                count: 0,
                i: 2
              }]
            ]),
            counts: [0, 0, 0],
            "ClosureScopes:counts": new Set
          }, , _.c, , _.f, , _.h], _.c._ = _.i[2] = _.b, _.b._ = _.e._ = _.g
          ._ = _.d, _.f._ = _.i[4] = _.e, _.h._ = _.i[6] = _.g, _.i),
        "__tests__/template.marko_3",
        3, 5, 7
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
      M._.r = [_ =&gt; (_.i = [0, _.d = {
            "LoopScopeMap:#text/0": new Map(_.a = [
              [0, _.b = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.c = {},
                count: 0,
                i: 0
              }],
              [1, _.e = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.f = {},
                count: 0,
                i: 1
              }],
              [2, _.g = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.h = {},
                count: 0,
                i: 2
              }]
            ]),
            counts: [0, 0, 0],
            "ClosureScopes:counts": new Set
          }, , _.c, , _.f, , _.h], _.c._ = _.i[2] = _.b, _.b._ = _.e._ = _.g
          ._ = _.d, _.f._ = _.i[4] = _.e, _.h._ = _.i[6] = _.g, _.i),
        "__tests__/template.marko_3",
        3, 5, 7
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
      Increment 0
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
      M._.r = [_ =&gt; (_.i = [0, _.d = {
            "LoopScopeMap:#text/0": new Map(_.a = [
              [0, _.b = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.c = {},
                count: 0,
                i: 0
              }],
              [1, _.e = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.f = {},
                count: 0,
                i: 1
              }],
              [2, _.g = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.h = {},
                count: 0,
                i: 2
              }]
            ]),
            counts: [0, 0, 0],
            "ClosureScopes:counts": new Set
          }, , _.c, , _.f, , _.h], _.c._ = _.i[2] = _.b, _.b._ = _.e._ = _.g
          ._ = _.d, _.f._ = _.i[4] = _.e, _.h._ = _.i[6] = _.g, _.i),
        "__tests__/template.marko_3",
        3, 5, 7
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
UPDATE html/body/button0/#text1 "" => "0"
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
      Increment 0
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Increment 0
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
      M._.r = [_ =&gt; (_.i = [0, _.d = {
            "LoopScopeMap:#text/0": new Map(_.a = [
              [0, _.b = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.c = {},
                count: 0,
                i: 0
              }],
              [1, _.e = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.f = {},
                count: 0,
                i: 1
              }],
              [2, _.g = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.h = {},
                count: 0,
                i: 2
              }]
            ]),
            counts: [0, 0, 0],
            "ClosureScopes:counts": new Set
          }, , _.c, , _.f, , _.h], _.c._ = _.i[2] = _.b, _.b._ = _.e._ = _.g
          ._ = _.d, _.f._ = _.i[4] = _.e, _.h._ = _.i[6] = _.g, _.i),
        "__tests__/template.marko_3",
        3, 5, 7
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
UPDATE html/body/button1/#text1 "" => "0"
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
      Increment 0
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <!--M_[2-->
    <button>
      Increment 0
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Increment 0
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.i = [0, _.d = {
            "LoopScopeMap:#text/0": new Map(_.a = [
              [0, _.b = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.c = {},
                count: 0,
                i: 0
              }],
              [1, _.e = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.f = {},
                count: 0,
                i: 1
              }],
              [2, _.g = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.h = {},
                count: 0,
                i: 2
              }]
            ]),
            counts: [0, 0, 0],
            "ClosureScopes:counts": new Set
          }, , _.c, , _.f, , _.h], _.c._ = _.i[2] = _.b, _.b._ = _.e._ = _.g
          ._ = _.d, _.f._ = _.i[4] = _.e, _.h._ = _.i[6] = _.g, _.i),
        "__tests__/template.marko_3",
        3, 5, 7
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
UPDATE html/body/button2/#text1 "" => "0"
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
      Increment 0
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <!--M_[4-->
    <button>
      Increment 0
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.i = [0, _.d = {
            "LoopScopeMap:#text/0": new Map(_.a = [
              [0, _.b = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.c = {},
                count: 0,
                i: 0
              }],
              [1, _.e = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.f = {},
                count: 0,
                i: 1
              }],
              [2, _.g = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.h = {},
                count: 0,
                i: 2
              }]
            ]),
            counts: [0, 0, 0],
            "ClosureScopes:counts": new Set
          }, , _.c, , _.f, , _.h], _.c._ = _.i[2] = _.b, _.b._ = _.e._ = _.g
          ._ = _.d, _.f._ = _.i[4] = _.e, _.h._ = _.i[6] = _.g, _.i),
        "__tests__/template.marko_3",
        3, 5, 7
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
      Increment 0
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_]1 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.i = [0, _.d = {
            "LoopScopeMap:#text/0": new Map(_.a = [
              [0, _.b = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.c = {},
                count: 0,
                i: 0
              }],
              [1, _.e = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.f = {},
                count: 0,
                i: 1
              }],
              [2, _.g = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.h = {},
                count: 0,
                i: 2
              }]
            ]),
            counts: [0, 0, 0],
            "ClosureScopes:counts": new Set
          }, , _.c, , _.f, , _.h], _.c._ = _.i[2] = _.b, _.b._ = _.e._ = _.g
          ._ = _.d, _.f._ = _.i[4] = _.e, _.h._ = _.i[6] = _.g, _.i),
        "__tests__/template.marko_3",
        3, 5, 7
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
      M._.r = [_ =&gt; (_.i = [0, _.d = {
            "LoopScopeMap:#text/0": new Map(_.a = [
              [0, _.b = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.c = {},
                count: 0,
                i: 0
              }],
              [1, _.e = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.f = {},
                count: 0,
                i: 1
              }],
              [2, _.g = {
                "ConditionalRenderer:#text/0": 1,
                "ConditionalScope:#text/0": _.h = {},
                count: 0,
                i: 2
              }]
            ]),
            counts: [0, 0, 0],
            "ClosureScopes:counts": new Set
          }, , _.c, , _.f, , _.h], _.c._ = _.i[2] = _.b, _.b._ = _.e._ = _.g
          ._ = _.d, _.f._ = _.i[4] = _.e, _.h._ = _.i[6] = _.g, _.i),
        "__tests__/template.marko_3",
        3, 5, 7
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