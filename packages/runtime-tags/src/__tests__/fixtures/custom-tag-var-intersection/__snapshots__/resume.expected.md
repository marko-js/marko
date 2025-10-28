# Render
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      0
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <div>
      Marko 1
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "#scopeOffset/1": 3,
          name: "Marko",
          "#childScope/0": _.a = {
            input_extra: 1,
            x: 0
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
      1
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <div>
      Marko 2
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "#scopeOffset/1": 3,
          name: "Marko",
          "#childScope/0": _.a = {
            input_extra: 1,
            x: 0
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
UPDATE html/body/button/#text "0" => "1"
UPDATE html/body/div/#text "Marko 1" => "Marko 2"
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
      Marko 3
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "#scopeOffset/1": 3,
          name: "Marko",
          "#childScope/0": _.a = {
            input_extra: 1,
            x: 0
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
UPDATE html/body/div/#text "Marko 2" => "Marko 3"
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
      Marko 4
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "#scopeOffset/1": 3,
          name: "Marko",
          "#childScope/0": _.a = {
            input_extra: 1,
            x: 0
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
UPDATE html/body/div/#text "Marko 3" => "Marko 4"
```