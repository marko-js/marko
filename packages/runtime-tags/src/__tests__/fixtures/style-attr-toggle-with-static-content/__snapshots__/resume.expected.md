# Render
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <div
      style="border:1px solid black"
    >
      foo bar
    </div>
    <!--M_*1 #div/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          open: !0
        }]),
        "__tests__/template.marko_0_open 1"
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
    <button />
    <!--M_*1 #button/0-->
    <div
      style="border:1px solid black;display:none"
    >
      foo bar
    </div>
    <!--M_*1 #div/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          open: !0
        }]),
        "__tests__/template.marko_0_open 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[style] "border:1px solid black" => "border: 1px solid black; display: none;"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <div
      style="border:1px solid black"
    >
      foo bar
    </div>
    <!--M_*1 #div/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          open: !0
        }]),
        "__tests__/template.marko_0_open 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[style] "border: 1px solid black; display: none;" => "border: 1px solid black;"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <div
      style="border:1px solid black;display:none"
    >
      foo bar
    </div>
    <!--M_*1 #div/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          open: !0
        }]),
        "__tests__/template.marko_0_open 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[style] "border: 1px solid black;" => "border: 1px solid black; display: none;"
```