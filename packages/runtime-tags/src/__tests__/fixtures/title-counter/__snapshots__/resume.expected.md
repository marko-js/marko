# Render
```html
<html>
  <head>
    <title>
      Count is 0
    </title>
    <!--M_*1 #title/0-->
  </head>
  <body>
    <button>
      +
    </button>
    <!--M_*1 #button/1-->
    <div>
      Count is 0
    </div>
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          count: 0
        }]),
        "__tests__/template.marko_0_count 1"
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
  <head>
    <title>
      Count is 1
    </title>
    <!--M_*1 #title/0-->
  </head>
  <body>
    <button>
      +
    </button>
    <!--M_*1 #button/1-->
    <div>
      Count is 1
    </div>
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          count: 0
        }]),
        "__tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/head/title
INSERT html/head/title/#text
REMOVE #text in html/body/div
INSERT html/body/div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head>
    <title>
      Count is 2
    </title>
    <!--M_*1 #title/0-->
  </head>
  <body>
    <button>
      +
    </button>
    <!--M_*1 #button/1-->
    <div>
      Count is 2
    </div>
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          count: 0
        }]),
        "__tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/head/title
INSERT html/head/title/#text
REMOVE #text in html/body/div
INSERT html/body/div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head>
    <title>
      Count is 3
    </title>
    <!--M_*1 #title/0-->
  </head>
  <body>
    <button>
      +
    </button>
    <!--M_*1 #button/1-->
    <div>
      Count is 3
    </div>
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          count: 0
        }]),
        "__tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/head/title
INSERT html/head/title/#text
REMOVE #text in html/body/div
INSERT html/body/div/#text
```