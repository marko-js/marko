# Render {}
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
    <!--M_*0 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{x:0}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x"];M._.d=1;M._.w()
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
      Update 1
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*0 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{x:0}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x"];M._.d=1;M._.w()
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
      Update 2
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*0 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{x:0}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #text in #document/html0/body1/div0
inserted #document/html0/body1/div0/#text0
```