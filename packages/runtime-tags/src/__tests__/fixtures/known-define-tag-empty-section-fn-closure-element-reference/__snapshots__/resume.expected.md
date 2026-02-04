# Render
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*1 #div/0-->
    <button />
    <!--M_*2 #button/0-->
     
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {},
        {
          input_message: "hello",
          _: _.a
        }]),
        "__tests__/template.marko_1_input_message 2"
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
      [onClick(hello)]
    </div>
    <!--M_*1 #div/0-->
    <button />
    <!--M_*2 #button/0-->
     
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {},
        {
          input_message: "hello",
          _: _.a
        }]),
        "__tests__/template.marko_1_input_message 2"
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
    <div>
      [onClick(hello)][onClick(hello)]
    </div>
    <!--M_*1 #div/0-->
    <button />
    <!--M_*2 #button/0-->
     
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {},
        {
          input_message: "hello",
          _: _.a
        }]),
        "__tests__/template.marko_1_input_message 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/div
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
    <div>
      [onClick(hello)][onClick(hello)][onClick(hello)]
    </div>
    <!--M_*1 #div/0-->
    <button />
    <!--M_*2 #button/0-->
     
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {},
        {
          input_message: "hello",
          _: _.a
        }]),
        "__tests__/template.marko_1_input_message 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/div
INSERT html/body/div/#text
```