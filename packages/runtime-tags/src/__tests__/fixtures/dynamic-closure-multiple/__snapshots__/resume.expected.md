# Render
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      0
      <!--M_*3 #text/0-->
    </div>
    <div>
      0
      <!--M_*3 #text/1-->
    </div>
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          a: 0,
          b: 0,
          "ClosureScopes:a": _.d = new Set,
          "ClosureScopes:b": _.f = new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/1"
        }, _.e = {
          _: _.b,
          "ClosureSignalIndex:a": 0,
          "ClosureSignalIndex:b": 0
        }], (_.d).add(_.e), (_.f).add(_.e), _.c),
        "__tests__/template.marko_0_a_b 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      1
      <!--M_*3 #text/0-->
    </div>
    <div>
      1
      <!--M_*3 #text/1-->
    </div>
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          a: 0,
          b: 0,
          "ClosureScopes:a": _.d = new Set,
          "ClosureScopes:b": _.f = new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/1"
        }, _.e = {
          _: _.b,
          "ClosureSignalIndex:a": 0,
          "ClosureSignalIndex:b": 0
        }], (_.d).add(_.e), (_.f).add(_.e), _.c),
        "__tests__/template.marko_0_a_b 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div1/#text "0" => "1"
UPDATE html/body/div0/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      2
      <!--M_*3 #text/0-->
    </div>
    <div>
      2
      <!--M_*3 #text/1-->
    </div>
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          a: 0,
          b: 0,
          "ClosureScopes:a": _.d = new Set,
          "ClosureScopes:b": _.f = new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/1"
        }, _.e = {
          _: _.b,
          "ClosureSignalIndex:a": 0,
          "ClosureSignalIndex:b": 0
        }], (_.d).add(_.e), (_.f).add(_.e), _.c),
        "__tests__/template.marko_0_a_b 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div1/#text "1" => "2"
UPDATE html/body/div0/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      3
      <!--M_*3 #text/0-->
    </div>
    <div>
      3
      <!--M_*3 #text/1-->
    </div>
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          a: 0,
          b: 0,
          "ClosureScopes:a": _.d = new Set,
          "ClosureScopes:b": _.f = new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/1"
        }, _.e = {
          _: _.b,
          "ClosureSignalIndex:a": 0,
          "ClosureSignalIndex:b": 0
        }], (_.d).add(_.e), (_.f).add(_.e), _.c),
        "__tests__/template.marko_0_a_b 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div1/#text "2" => "3"
UPDATE html/body/div0/#text "2" => "3"
```