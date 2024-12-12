# Render {}
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    used to be 
    <span>
      0
      <!--M_*0 #text/2-->
    </span>
     which should be the same as 
    <span>
      0
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
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
      1
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    used to be 
    <span>
      0
      <!--M_*0 #text/2-->
    </span>
     which should be the same as 
    <span>
      0
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "0" => "1"
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
    used to be 
    <span>
      1
      <!--M_*0 #text/2-->
    </span>
     which should be the same as 
    <span>
      1
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
#document/html0/body1/span3/#text0: "0" => "1"
#document/html0/body1/span5/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      3
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    used to be 
    <span>
      2
      <!--M_*0 #text/2-->
    </span>
     which should be the same as 
    <span>
      2
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/span3/#text0: "1" => "2"
#document/html0/body1/span5/#text0: "1" => "2"
```