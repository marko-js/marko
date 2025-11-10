# Render
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      1
      <!--M_*2 #text/1-->
      ,
      <!---->
      10
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[-->
    <div>
      Counts: 
      <!---->
      1
      <!--M_*3 #text/0-->
      ,
      <!---->
      10
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/3 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
          "ConditionalRenderer:#text/3": "__tests__/template.marko_1_content",
          input_content: _.c = {},
          x: 1,
          y: 10
        },
        {}], _.a.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.c), _.b),
        "__tests__/tags/custom-tag.marko_0_x_y",
        2
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
    <button
      class="inc"
    >
      2
      <!--M_*2 #text/1-->
      ,
      <!---->
      11
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[-->
    <div>
      Counts: 
      <!---->
      2
      <!--M_*3 #text/0-->
      ,
      <!---->
      11
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/3 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
          "ConditionalRenderer:#text/3": "__tests__/template.marko_1_content",
          input_content: _.c = {},
          x: 1,
          y: 10
        },
        {}], _.a.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.c), _.b),
        "__tests__/tags/custom-tag.marko_0_x_y",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text0 "1" => "2"
UPDATE html/body/button/#text2 "10" => "11"
UPDATE html/body/div/#text1 "1" => "2"
UPDATE html/body/div/#text3 "10" => "11"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      3
      <!--M_*2 #text/1-->
      ,
      <!---->
      12
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[-->
    <div>
      Counts: 
      <!---->
      3
      <!--M_*3 #text/0-->
      ,
      <!---->
      12
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/3 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
          "ConditionalRenderer:#text/3": "__tests__/template.marko_1_content",
          input_content: _.c = {},
          x: 1,
          y: 10
        },
        {}], _.a.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.c), _.b),
        "__tests__/tags/custom-tag.marko_0_x_y",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text0 "2" => "3"
UPDATE html/body/button/#text2 "11" => "12"
UPDATE html/body/div/#text1 "2" => "3"
UPDATE html/body/div/#text3 "11" => "12"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      4
      <!--M_*2 #text/1-->
      ,
      <!---->
      13
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[-->
    <div>
      Counts: 
      <!---->
      4
      <!--M_*3 #text/0-->
      ,
      <!---->
      13
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/3 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
          "ConditionalRenderer:#text/3": "__tests__/template.marko_1_content",
          input_content: _.c = {},
          x: 1,
          y: 10
        },
        {}], _.a.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.c), _.b),
        "__tests__/tags/custom-tag.marko_0_x_y",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text0 "3" => "4"
UPDATE html/body/button/#text2 "12" => "13"
UPDATE html/body/div/#text1 "3" => "4"
UPDATE html/body/div/#text3 "12" => "13"
```