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
    <div>
      1
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "#scopeOffset/1": 3,
          "#childScope/0": _.a = {
            x: 1
          }
        }, _.a], _.a["#TagVariable"] = _._[
          "__tests__/template.marko_0_data/var"
          ](_.c), _.b),
        "__tests__/tags/child.marko_0_x",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button.inc").click();
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
    <div>
      2
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "#scopeOffset/1": 3,
          "#childScope/0": _.a = {
            x: 1
          }
        }, _.a], _.a["#TagVariable"] = _._[
          "__tests__/template.marko_0_data/var"
          ](_.c), _.b),
        "__tests__/tags/child.marko_0_x",
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
UPDATE html/body/div/#text "1" => "2"
```

# Render
```js
container.querySelector("button.inc").click();
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
    <div>
      3
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "#scopeOffset/1": 3,
          "#childScope/0": _.a = {
            x: 1
          }
        }, _.a], _.a["#TagVariable"] = _._[
          "__tests__/template.marko_0_data/var"
          ](_.c), _.b),
        "__tests__/tags/child.marko_0_x",
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
UPDATE html/body/div/#text "2" => "3"
```

# Render
```js
container.querySelector("button.inc").click();
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
    <div>
      4
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "#scopeOffset/1": 3,
          "#childScope/0": _.a = {
            x: 1
          }
        }, _.a], _.a["#TagVariable"] = _._[
          "__tests__/template.marko_0_data/var"
          ](_.c), _.b),
        "__tests__/tags/child.marko_0_x",
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
UPDATE html/body/div/#text "3" => "4"
```