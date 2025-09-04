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
    <!--M_[3-->
    <div>
      Count (
      <!---->
      hello
      <!--M_*3 #text/0-->
      ): 
      <!---->
      1
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1,
        {
          "ConditionalScope:#text/2": _.b = {},
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          input_content: _._[
            "__tests__/template.marko_1_content"
            ](_.a = {}),
          input_name: "hello",
          x: 1
        }, _.b]),
        "__tests__/tags/custom-tag.marko_0_x",
        2
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
    <button
      class="inc"
    >
      2
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[3-->
    <div>
      Count (
      <!---->
      hello
      <!--M_*3 #text/0-->
      ): 
      <!---->
      2
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1,
        {
          "ConditionalScope:#text/2": _.b = {},
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          input_content: _._[
            "__tests__/template.marko_1_content"
            ](_.a = {}),
          input_name: "hello",
          x: 1
        }, _.b]),
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
    <button
      class="inc"
    >
      3
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[3-->
    <div>
      Count (
      <!---->
      hello
      <!--M_*3 #text/0-->
      ): 
      <!---->
      3
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1,
        {
          "ConditionalScope:#text/2": _.b = {},
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          input_content: _._[
            "__tests__/template.marko_1_content"
            ](_.a = {}),
          input_name: "hello",
          x: 1
        }, _.b]),
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
UPDATE html/body/div/#text3 "2" => "3"
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
    <!--M_[3-->
    <div>
      Count (
      <!---->
      hello
      <!--M_*3 #text/0-->
      ): 
      <!---->
      4
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1,
        {
          "ConditionalScope:#text/2": _.b = {},
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          input_content: _._[
            "__tests__/template.marko_1_content"
            ](_.a = {}),
          input_name: "hello",
          x: 1
        }, _.b]),
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
UPDATE html/body/div/#text3 "3" => "4"
```