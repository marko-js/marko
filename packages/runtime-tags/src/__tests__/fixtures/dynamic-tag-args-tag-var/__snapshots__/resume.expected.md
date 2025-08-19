# Render
```html
<html>
  <head />
  <body>
    <button>
      Count: 
      <!---->
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Child: 
      <!---->
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <div>
      Parent: 
      <!---->
      1
      <!--M_*1 #text/4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/2": _.b = {},
          "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
          "#scopeOffset/3": 3,
          x: 1
        }, _.b], _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_y/var"
          ](_.a), _.c),
        "__tests__/template.marko_0_x",
        1
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
    <button>
      Count: 
      <!---->
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Child: 
      <!---->
      2
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <div>
      Parent: 
      <!---->
      2
      <!--M_*1 #text/4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/2": _.b = {},
          "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
          "#scopeOffset/3": 3,
          x: 1
        }, _.b], _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_y/var"
          ](_.a), _.c),
        "__tests__/template.marko_0_x",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "1" => "2"
UPDATE html/body/div0/#text1 "1" => "2"
UPDATE html/body/div1/#text1 "1" => "2"
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
      Count: 
      <!---->
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Child: 
      <!---->
      3
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <div>
      Parent: 
      <!---->
      3
      <!--M_*1 #text/4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/2": _.b = {},
          "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
          "#scopeOffset/3": 3,
          x: 1
        }, _.b], _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_y/var"
          ](_.a), _.c),
        "__tests__/template.marko_0_x",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "2" => "3"
UPDATE html/body/div0/#text1 "2" => "3"
UPDATE html/body/div1/#text1 "2" => "3"
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
      Count: 
      <!---->
      4
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Child: 
      <!---->
      4
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <div>
      Parent: 
      <!---->
      4
      <!--M_*1 #text/4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/2": _.b = {},
          "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
          "#scopeOffset/3": 3,
          x: 1
        }, _.b], _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_y/var"
          ](_.a), _.c),
        "__tests__/template.marko_0_x",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "3" => "4"
UPDATE html/body/div0/#text1 "3" => "4"
UPDATE html/body/div1/#text1 "3" => "4"
```