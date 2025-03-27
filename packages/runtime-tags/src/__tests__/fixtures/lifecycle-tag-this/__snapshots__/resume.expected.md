# Render
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      x=0, was=undefined
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{x:0}]),1,"__tests__/template.marko_0_x"];M._.w()
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
      x=1, was=0
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{x:0}]),1,"__tests__/template.marko_0_x"];M._.w()
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
      x=2, was=1
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{x:0}]),1,"__tests__/template.marko_0_x"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/div
INSERT html/body/div/#text
```