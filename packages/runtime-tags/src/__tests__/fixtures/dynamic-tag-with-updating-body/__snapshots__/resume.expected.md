# Render
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[3-->
      <button
        id="count"
      >
        0
        <!--M_*4 #text/1-->
      </button>
      <!--M_*4 #button/0-->
      <!--M_]2 #div/0-->
    </div>
    <!--M_'1 #text/0 2-->
    <button
      id="changeTag"
    />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          "ConditionalScope:#text/0": _.a = {
            "ConditionalScope:#div/0": _.b = {},
            "ConditionalRenderer:#div/0": "__tests__/template.marko_1_renderer"
          },
          "ConditionalRenderer:#text/0": "div",
          tagName: "div"
        }, _.a, _.b,
        {
          count: 0,
          "#ClosestBranchId": 3
        }]),
        "__tests__/tags/counter.marko_0_count",
        4,
        "__tests__/template.marko_0_tagName",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("#count").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[3-->
      <button
        id="count"
      >
        1
        <!--M_*4 #text/1-->
      </button>
      <!--M_*4 #button/0-->
      <!--M_]2 #div/0-->
    </div>
    <!--M_'1 #text/0 2-->
    <button
      id="changeTag"
    />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          "ConditionalScope:#text/0": _.a = {
            "ConditionalScope:#div/0": _.b = {},
            "ConditionalRenderer:#div/0": "__tests__/template.marko_1_renderer"
          },
          "ConditionalRenderer:#text/0": "div",
          tagName: "div"
        }, _.a, _.b,
        {
          count: 0,
          "#ClosestBranchId": 3
        }]),
        "__tests__/tags/counter.marko_0_count",
        4,
        "__tests__/template.marko_0_tagName",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "0" => "1"
```

# Render
```js
container.querySelector("#changeTag").click();
```
```html
<html>
  <head />
  <body>
    <span>
      <button
        id="count"
      >
        0
      </button>
    </span>
    <!--M_'1 #text/0 2-->
    <button
      id="changeTag"
    />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          "ConditionalScope:#text/0": _.a = {
            "ConditionalScope:#div/0": _.b = {},
            "ConditionalRenderer:#div/0": "__tests__/template.marko_1_renderer"
          },
          "ConditionalRenderer:#text/0": "div",
          tagName: "div"
        }, _.a, _.b,
        {
          count: 0,
          "#ClosestBranchId": 3
        }]),
        "__tests__/tags/counter.marko_0_count",
        4,
        "__tests__/template.marko_0_tagName",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/span
REMOVE div after html/body/span
INSERT html/body/span/button
UPDATE html/body/span/button/#text " " => "0"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<html>
  <head />
  <body>
    <span>
      <button
        id="count"
      >
        1
      </button>
    </span>
    <!--M_'1 #text/0 2-->
    <button
      id="changeTag"
    />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          "ConditionalScope:#text/0": _.a = {
            "ConditionalScope:#div/0": _.b = {},
            "ConditionalRenderer:#div/0": "__tests__/template.marko_1_renderer"
          },
          "ConditionalRenderer:#text/0": "div",
          tagName: "div"
        }, _.a, _.b,
        {
          count: 0,
          "#ClosestBranchId": 3
        }]),
        "__tests__/tags/counter.marko_0_count",
        4,
        "__tests__/template.marko_0_tagName",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/button/#text "0" => "1"
```