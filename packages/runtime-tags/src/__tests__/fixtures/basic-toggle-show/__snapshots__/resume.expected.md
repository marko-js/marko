# Render
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[-->
      Hello!
      <!--M_]1 #text/0 2-->
      <button>
        Toggle
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          show: !0
        },
        {}]),
        "__tests__/template.marko_0_show 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text1
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <!--M_]1 #text/0 2-->
      <button>
        Toggle
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          show: !0
        },
        {}]),
        "__tests__/template.marko_0_show 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment0 after #text
INSERT html/body/div/#comment0
REMOVE #comment after html/body/div/#comment0
REMOVE #text after html/body/div/#comment0
REMOVE #text after html/body/div/#comment0
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      Hello!
      <button>
        Toggle
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          show: !0
        },
        {}]),
        "__tests__/template.marko_0_show 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
REMOVE #comment after html/body/div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <!--M_]1 #text/0 2-->
      <button>
        Toggle
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          show: !0
        },
        {}]),
        "__tests__/template.marko_0_show 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#comment0
REMOVE #text after html/body/div/#comment0
```