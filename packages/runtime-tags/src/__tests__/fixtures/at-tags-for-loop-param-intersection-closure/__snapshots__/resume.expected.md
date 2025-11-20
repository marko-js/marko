# Render
```html
<html>
  <head />
  <body>
    2
    <!--M_*4 #text/0-->
    4
    <!--M_*6 #text/0-->
    6
    <!--M_*8 #text/0-->
    <button>
      Multiplier: 
      <!---->
      2
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          mult: 2,
          "ClosureScopes:mult": _.c = new Set
        }, 2, _.d = {
          item: 1,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }, 1, _.e = {
          item: 2,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }, 1, _.f = {
          item: 3,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }], (_.c).add(_.d), _.c.add(_.e), _.c.add(_.f), _.b),
        "__tests__/template.marko_0_mult 1"
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
    3
    <!--M_*4 #text/0-->
    6
    <!--M_*6 #text/0-->
    9
    <!--M_*8 #text/0-->
    <button>
      Multiplier: 
      <!---->
      3
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          mult: 2,
          "ClosureScopes:mult": _.c = new Set
        }, 2, _.d = {
          item: 1,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }, 1, _.e = {
          item: 2,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }, 1, _.f = {
          item: 3,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }], (_.c).add(_.d), _.c.add(_.e), _.c.add(_.f), _.b),
        "__tests__/template.marko_0_mult 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "2" => "3"
UPDATE html/body/#text0 "2" => "3"
UPDATE html/body/#text1 "4" => "6"
UPDATE html/body/#text2 "6" => "9"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    4
    <!--M_*4 #text/0-->
    8
    <!--M_*6 #text/0-->
    12
    <!--M_*8 #text/0-->
    <button>
      Multiplier: 
      <!---->
      4
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          mult: 2,
          "ClosureScopes:mult": _.c = new Set
        }, 2, _.d = {
          item: 1,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }, 1, _.e = {
          item: 2,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }, 1, _.f = {
          item: 3,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }], (_.c).add(_.d), _.c.add(_.e), _.c.add(_.f), _.b),
        "__tests__/template.marko_0_mult 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "3" => "4"
UPDATE html/body/#text0 "3" => "4"
UPDATE html/body/#text1 "6" => "8"
UPDATE html/body/#text2 "9" => "12"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    5
    <!--M_*4 #text/0-->
    10
    <!--M_*6 #text/0-->
    15
    <!--M_*8 #text/0-->
    <button>
      Multiplier: 
      <!---->
      5
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          mult: 2,
          "ClosureScopes:mult": _.c = new Set
        }, 2, _.d = {
          item: 1,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }, 1, _.e = {
          item: 2,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }, 1, _.f = {
          item: 3,
          _: _.a,
          "ClosureSignalIndex:mult": 0
        }], (_.c).add(_.d), _.c.add(_.e), _.c.add(_.f), _.b),
        "__tests__/template.marko_0_mult 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "4" => "5"
UPDATE html/body/#text0 "4" => "5"
UPDATE html/body/#text1 "8" => "10"
UPDATE html/body/#text2 "12" => "15"
```