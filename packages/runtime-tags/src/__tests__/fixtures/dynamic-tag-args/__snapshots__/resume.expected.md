# Render {}
```html
<html>
  <head />
  <body>
    <button>
      Count: 
      <!---->
      1
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <!--M_[1-->
    <div>
      1
      <!--M_*1 #text/0-->
    </div>
    <!--M_]0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{x:1,"#text/2!":_.a={},"#text/2(":_._["__tests__/tags/custom-tag.marko"]},1:_.a}),0,"__tests__/template.marko_0_x",0];M._.w()
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
      Count: 
      <!---->
      2
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <!--M_[1-->
    <div>
      2
      <!--M_*1 #text/0-->
    </div>
    <!--M_]0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{x:1,"#text/2!":_.a={},"#text/2(":_._["__tests__/tags/custom-tag.marko"]},1:_.a}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text2: "1" => "2"
#document/html0/body1/div3/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Count: 
      <!---->
      3
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <!--M_[1-->
    <div>
      3
      <!--M_*1 #text/0-->
    </div>
    <!--M_]0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{x:1,"#text/2!":_.a={},"#text/2(":_._["__tests__/tags/custom-tag.marko"]},1:_.a}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text2: "2" => "3"
#document/html0/body1/div3/#text0: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Count: 
      <!---->
      4
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <!--M_[1-->
    <div>
      4
      <!--M_*1 #text/0-->
    </div>
    <!--M_]0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{x:1,"#text/2!":_.a={},"#text/2(":_._["__tests__/tags/custom-tag.marko"]},1:_.a}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text2: "3" => "4"
#document/html0/body1/div3/#text0: "3" => "4"
```