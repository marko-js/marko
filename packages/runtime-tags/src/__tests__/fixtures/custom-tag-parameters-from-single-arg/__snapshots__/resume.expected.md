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
    </button>
    <!--M_*2 #button/0-->
    <!--M_[-->
    <div>
      Count: 
      <!---->
      1
      <!--M_*3 #text/0-->
    </div>
    <!--M_]2 #text/2 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          input_content: _.c = {},
          x: 1
        },
        {}], _.a.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.c), _.b),
        "__tests__/tags/custom-tag.marko_0_x",
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
    </button>
    <!--M_*2 #button/0-->
    <!--M_[-->
    <div>
      Count: 
      <!---->
      2
      <!--M_*3 #text/0-->
    </div>
    <!--M_]2 #text/2 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          input_content: _.c = {},
          x: 1
        },
        {}], _.a.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.c), _.b),
        "__tests__/tags/custom-tag.marko_0_x",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
UPDATE html/body/div/#text1 "1" => "2"
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
    </button>
    <!--M_*2 #button/0-->
    <!--M_[-->
    <div>
      Count: 
      <!---->
      3
      <!--M_*3 #text/0-->
    </div>
    <!--M_]2 #text/2 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          input_content: _.c = {},
          x: 1
        },
        {}], _.a.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.c), _.b),
        "__tests__/tags/custom-tag.marko_0_x",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
UPDATE html/body/div/#text1 "2" => "3"
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
    </button>
    <!--M_*2 #button/0-->
    <!--M_[-->
    <div>
      Count: 
      <!---->
      4
      <!--M_*3 #text/0-->
    </div>
    <!--M_]2 #text/2 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          input_content: _.c = {},
          x: 1
        },
        {}], _.a.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.c), _.b),
        "__tests__/tags/custom-tag.marko_0_x",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "3" => "4"
UPDATE html/body/div/#text1 "3" => "4"
```