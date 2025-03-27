# Render
```html
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      0
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button
      id="triple"
    >
      0
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      id="cube"
    >
      0
      <!--M_*1 #text/5-->
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{count:0}]),1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("#addTwo").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button
      id="triple"
    >
      2
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      id="cube"
    >
      2
      <!--M_*1 #text/5-->
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{count:0}]),1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "0" => "2"
UPDATE html/body/button1/#text "0" => "2"
UPDATE html/body/button2/#text "0" => "2"
```

# Render
```js
container.querySelector("#triple").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      6
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button
      id="triple"
    >
      6
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      id="cube"
    >
      6
      <!--M_*1 #text/5-->
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{count:0}]),1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "2" => "6"
UPDATE html/body/button1/#text "2" => "6"
UPDATE html/body/button2/#text "2" => "6"
```

# Render
```js
container.querySelector("#cube").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      216
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button
      id="triple"
    >
      216
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <button
      id="cube"
    >
      216
      <!--M_*1 #text/5-->
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{count:0}]),1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "6" => "216"
UPDATE html/body/button1/#text "6" => "216"
UPDATE html/body/button2/#text "6" => "216"
```