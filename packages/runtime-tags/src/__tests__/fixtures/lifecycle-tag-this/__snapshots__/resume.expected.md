# Render {}
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
    <!--M_*0 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:0}}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/#text0
```


# Render 
container.querySelector("#increment")?.click()

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
    <!--M_*0 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:0}}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #text in #document/html0/body1/div0
inserted #document/html0/body1/div0/#text0
```


# Render 
container.querySelector("#increment")?.click()

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
    <!--M_*0 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:0}}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #text in #document/html0/body1/div0
inserted #document/html0/body1/div0/#text0
```