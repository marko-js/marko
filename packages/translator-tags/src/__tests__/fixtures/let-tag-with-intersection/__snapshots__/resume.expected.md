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
    2
    <!--M_*0 #text/2-->
     
    <!---->
    3
    <!--M_*0 #text/3-->
     
    <!---->
    5
    <!--M_*0 #text/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"packages/translator-tags/src/__tests__/fixtures/let-tag-with-intersection/template.marko_0_x",0];M._.w()
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
    3
    <!--M_*0 #text/2-->
     
    <!---->
    4
    <!--M_*0 #text/3-->
     
    <!---->
    7
    <!--M_*0 #text/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"packages/translator-tags/src/__tests__/fixtures/let-tag-with-intersection/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
#document/html0/body1/#text2: "2" => "3"
#document/html0/body1/#text6: "3" => "4"
#document/html0/body1/#text10: "5" => "7"
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
    4
    <!--M_*0 #text/2-->
     
    <!---->
    5
    <!--M_*0 #text/3-->
     
    <!---->
    9
    <!--M_*0 #text/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"packages/translator-tags/src/__tests__/fixtures/let-tag-with-intersection/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/#text2: "3" => "4"
#document/html0/body1/#text6: "4" => "5"
#document/html0/body1/#text10: "7" => "9"
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
    5
    <!--M_*0 #text/2-->
     
    <!---->
    6
    <!--M_*0 #text/3-->
     
    <!---->
    11
    <!--M_*0 #text/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"packages/translator-tags/src/__tests__/fixtures/let-tag-with-intersection/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "3" => "4"
#document/html0/body1/#text2: "4" => "5"
#document/html0/body1/#text6: "5" => "6"
#document/html0/body1/#text10: "9" => "11"
```