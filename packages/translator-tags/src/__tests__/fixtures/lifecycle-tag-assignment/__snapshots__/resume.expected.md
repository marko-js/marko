# Render {}
```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        0
        <!--M_*0 #text/0-->
      </span>
      , was=
      <!---->
      ‍
      <!--M_*0 #text/1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*0 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:0}}),0,"packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("#increment")?.click()

```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        1
        <!--M_*0 #text/0-->
      </span>
      , was=
      <!---->
      0
      <!--M_*0 #text/1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*0 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:0}}),0,"packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/span1/#text0: "0" => "1"
#document/html0/body1/div0/#text4: "‍" => "0"
```


# Render 
container.querySelector("#increment")?.click()

```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        2
        <!--M_*0 #text/0-->
      </span>
      , was=
      <!---->
      0
      <!--M_*0 #text/1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*0 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:0}}),0,"packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/span1/#text0: "1" => "2"
```


# Render "ASYNC"
```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        2
        <!--M_*0 #text/0-->
      </span>
      , was=
      <!---->
      1
      <!--M_*0 #text/1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*0 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:0}}),0,"packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/#text4: "0" => "1"
```