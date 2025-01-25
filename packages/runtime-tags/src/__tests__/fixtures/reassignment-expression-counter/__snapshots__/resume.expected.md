# Render {}
```html
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      0
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <button
      id="triple"
    >
      0
      <!--M_*0 #text/3-->
    </button>
    <!--M_*0 #button/2-->
    <button
      id="cube"
    >
      0
      <!--M_*0 #text/5-->
    </button>
    <!--M_*0 #button/4-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{count:0}}),0,"__tests__/template.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("#addTwo").click()

```html
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      2
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <button
      id="triple"
    >
      2
      <!--M_*0 #text/3-->
    </button>
    <!--M_*0 #button/2-->
    <button
      id="cube"
    >
      2
      <!--M_*0 #text/5-->
    </button>
    <!--M_*0 #button/4-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{count:0}}),0,"__tests__/template.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "0" => "2"
#document/html0/body1/button2/#text0: "0" => "2"
#document/html0/body1/button4/#text0: "0" => "2"
```


# Render 
container.querySelector("#triple").click()

```html
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      6
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <button
      id="triple"
    >
      6
      <!--M_*0 #text/3-->
    </button>
    <!--M_*0 #button/2-->
    <button
      id="cube"
    >
      6
      <!--M_*0 #text/5-->
    </button>
    <!--M_*0 #button/4-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{count:0}}),0,"__tests__/template.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "6"
#document/html0/body1/button2/#text0: "2" => "6"
#document/html0/body1/button4/#text0: "2" => "6"
```


# Render 
container.querySelector("#cube").click()

```html
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      216
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <button
      id="triple"
    >
      216
      <!--M_*0 #text/3-->
    </button>
    <!--M_*0 #button/2-->
    <button
      id="cube"
    >
      216
      <!--M_*0 #text/5-->
    </button>
    <!--M_*0 #button/4-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{count:0}}),0,"__tests__/template.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "6" => "216"
#document/html0/body1/button2/#text0: "6" => "216"
#document/html0/body1/button4/#text0: "6" => "216"
```