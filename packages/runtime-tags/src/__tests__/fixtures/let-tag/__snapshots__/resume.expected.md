# Render {}
```html
<html>
  <head />
  <body>
    <button>
      1
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    1
    <!--M_*0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1,y:1}}),0,"__tests__/template.marko_0_x_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      2
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    2
    <!--M_*0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1,y:1}}),0,"__tests__/template.marko_0_x_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/#text2: "1" => "2"
#document/html0/body1/button0/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      4
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    4
    <!--M_*0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1,y:1}}),0,"__tests__/template.marko_0_x_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/#text2: "2" => "4"
#document/html0/body1/button0/#text0: "2" => "4"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      8
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    8
    <!--M_*0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1,y:1}}),0,"__tests__/template.marko_0_x_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/#text2: "4" => "8"
#document/html0/body1/button0/#text0: "4" => "8"
```