# Render `{"message":"hello"}`

```html
<html>
  <head />
  <body>
    <div>
      <!--M_}1 #div/0-->
    </div>
    <button>
      0
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          input_message: "hello",
          x: 0
        }], _.a.getMessage = _._[
          "__tests__/template.marko_0/getMessage"
          ](_.a), _.b),
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
    <div>
      <!--M_}1 #div/0-->
      <span>
        hello
      </span>
    </div>
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          input_message: "hello",
          x: 0
        }], _.a.getMessage = _._[
          "__tests__/template.marko_0/getMessage"
          ](_.a), _.b),
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
UPDATE html/body/button/#text "0" => "1"
INSERT html/body/div/span
UPDATE html/body/div/span/#text " " => "hello"
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
      <!--M_}1 #div/0-->
      <span>
        hello
      </span>
    </div>
    <button>
      2
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          input_message: "hello",
          x: 0
        }], _.a.getMessage = _._[
          "__tests__/template.marko_0/getMessage"
          ](_.a), _.b),
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
UPDATE html/body/button/#text "1" => "2"
```