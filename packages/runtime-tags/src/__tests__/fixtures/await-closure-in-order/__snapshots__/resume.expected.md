# Render
```html
<html>
  <head />
  <body>
    <button>
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
        value: 1
      },
      {
        _: _.a
      }])]
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
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
        value: 1
      },
      {
        _: _.a
      }])]
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
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
        value: 1
      },
      {
        _: _.a
      }])]
    </script>
  </body>
</html>
```


# Render FLUSH
```html
<html>
  <head />
  <body>
    <button>
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
        value: 1
      },
      {
        _: _.a
      }])]
    </script>
    <span>
      Hello
    </span>
    <span>
      1
      <!--M_*2 #text/0-->
    </span>
    <!--M_|1 #text/3 2-->
    <script>
      M._.r.push(
        "__tests__/template.marko_0_value 1"
        );
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/span0
INSERT html/body/span0/#text
INSERT html/body/span1
INSERT html/body/span1/#text
INSERT html/body/span1/#comment
INSERT html/body/#comment1
INSERT html/body/script1
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
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
        value: 1
      },
      {
        _: _.a
      }])]
    </script>
    <span>
      Hello
    </span>
    <span>
      2
    </span>
    <!--M_|1 #text/3 2-->
    <script>
      M._.r.push(
        "__tests__/template.marko_0_value 1"
        );
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
INSERT html/body/span1
REMOVE span after html/body/span1
UPDATE html/body/span1/#text " " => "2"
```