# Render
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[-->
      <span>
        The thing
      </span>
      <!--M_]2 #text/1 3-->
    </div>
    <!--M_*2 #div/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          selected: !1,
          "#childScope/0": _.a = {
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content"
          }
        }, _.a]),
        "__tests__/template.marko_0_selected",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div
      class="selected"
    >
      <!--M_[-->
      <span>
        The thing
      </span>
      <!--M_]2 #text/1 3-->
    </div>
    <!--M_*2 #div/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          selected: !1,
          "#childScope/0": _.a = {
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content"
          }
        }, _.a]),
        "__tests__/template.marko_0_selected",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[class] null => "selected"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div
      class=""
    >
      <!--M_[-->
      <span>
        The thing
      </span>
      <!--M_]2 #text/1 3-->
    </div>
    <!--M_*2 #div/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          selected: !1,
          "#childScope/0": _.a = {
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content"
          }
        }, _.a]),
        "__tests__/template.marko_0_selected",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[class] "selected" => ""
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div
      class="selected"
    >
      <!--M_[-->
      <span>
        The thing
      </span>
      <!--M_]2 #text/1 3-->
    </div>
    <!--M_*2 #div/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          selected: !1,
          "#childScope/0": _.a = {
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content"
          }
        }, _.a]),
        "__tests__/template.marko_0_selected",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[class] "" => "selected"
```