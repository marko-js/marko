# Render
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M_*2 #text/0-->
       
      <!---->
      0
      <!--M_*2 #text/1-->
    </div>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "ConditionalScope:#text/2": _.c = {},
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          count: 0,
          MyTag: _.b = {}
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), _.d),
        "__tests__/template.marko_0_count",
        1
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
    <button>
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M_*2 #text/0-->
       
      <!---->
      1
      <!--M_*2 #text/1-->
    </div>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "ConditionalScope:#text/2": _.c = {},
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          count: 0,
          MyTag: _.b = {}
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), _.d),
        "__tests__/template.marko_0_count",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
UPDATE html/body/div/#text3 "0" => "1"
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
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M_*2 #text/0-->
       
      <!---->
      2
      <!--M_*2 #text/1-->
    </div>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "ConditionalScope:#text/2": _.c = {},
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          count: 0,
          MyTag: _.b = {}
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), _.d),
        "__tests__/template.marko_0_count",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
UPDATE html/body/div/#text3 "1" => "2"
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
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M_*2 #text/0-->
       
      <!---->
      3
      <!--M_*2 #text/1-->
    </div>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "ConditionalScope:#text/2": _.c = {},
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          count: 0,
          MyTag: _.b = {}
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), _.d),
        "__tests__/template.marko_0_count",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
UPDATE html/body/div/#text3 "2" => "3"
```