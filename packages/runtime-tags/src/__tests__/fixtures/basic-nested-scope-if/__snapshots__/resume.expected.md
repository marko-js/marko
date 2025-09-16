# Render
```html
<html>
  <head />
  <body>
    <div>
      <button>
        0
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
      <!--M_|1 #text/0 2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/0": _.b = {},
          clickCount: 0
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_1_clickCount",
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
    <div>
      <button>
        1
      </button>
      <!--M_*2 #button/0-->
      <!--M_|1 #text/0 2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/0": _.b = {},
          clickCount: 0
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_1_clickCount",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/button
REMOVE button after html/body/div/button
UPDATE html/body/div/button/#text " " => "1"
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
      <button>
        2
      </button>
      <!--M_*2 #button/0-->
      <!--M_|1 #text/0 2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/0": _.b = {},
          clickCount: 0
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_1_clickCount",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "1" => "2"
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
      <span>
        The button was clicked 3 times.
      </span>
      <!--M_*2 #button/0-->
      <!--M_|1 #text/0 2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/0": _.b = {},
          clickCount: 0
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_1_clickCount",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/span
REMOVE button after html/body/div/span
UPDATE html/body/div/span/#text1 "" => "3"
```