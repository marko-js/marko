# Render
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      Mount 0
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{x:0}}),1,"__tests__/template.marko_0_x",0];M._.w()
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
container.querySelector("#increment")?.click();
```
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      Update 1
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{x:0}}),1,"__tests__/template.marko_0_x",0];M._.w()
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
container.querySelector("#increment")?.click();
```
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      Update 2
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{x:0}}),1,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/div
INSERT html/body/div/#text
```